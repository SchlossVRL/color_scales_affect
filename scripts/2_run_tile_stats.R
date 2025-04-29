#!/usr/bin/env Rscript
#
# 2_run_tile_stats.R
# 
# Purpose:
#	To calculate statistic for each tile, output results to a CSV.
#
# History:
#	Written by Seth Gorelik, 9/22/24
#	Updated by Seth Gorelik, 10/6/24, to run 30m tiles
#
# Notes:
#	Parallelized execution (it took ~4 hours to run with 48 CPUs)
#

library(doMC)
library(raster)

# input tif directory
tif.dir <- '/data/harris30m/tif/'
dir.create(tif.dir, showWarnings = F)

# output csv directory
csv.dir <- '/data/harris30m/csv/'
dir.create(csv.dir, showWarnings = F)

# get list of tiles stored in bucket
# tile.list <- system('gsutil -m ls gs://uw-ks-data/harris30m/tiles1000/*.tif', intern = T)
# df.tiles <- data.frame(url = tile.list)
# write.csv(df.tiles, file = 'etc/tiles_1000px_all.csv', row.names = F)
# system('gsutil -m cp etc/tiles_1000px_all.csv gs://uw-ks-data/harris30m/')
df.tiles <- read.csv('etc/tiles_1000px_all.csv', stringsAsFactors = F)

# register cores 
registerDoMC(detectCores() - 1)

# calculate stats on each tile
df.out <- foreach(i = 1:nrow(df.tiles), .combine = rbind, .packages = c('raster')) %dopar% {

	# get tile url
	url <- df.tiles$url[i]

	# get tile filename
	f.tif.base <- basename(url)
	cat(paste('Processing', f.tif.base, '...\n'))
	
	# download tile
	system(paste('gsutil cp', url, tif.dir), ignore.stdout = T, ignore.stderr = T)

	# get local path to tif
	f.tif <- paste0(tif.dir, f.tif.base)

	# read raster
	r.tile <- raster(f.tif)

	# get spatial extent
	ext <- extent(r.tile)

	# convert to vector
	v.tile <- values(r.tile)

	# delete raster from memory and disk
	catch.message <- file.remove(f.tif)
	rm(r.tile)
	gc()

	# index and count NA values
	na.ind <- is.na(v.tile)
	na.cnt <- sum(na.ind)
	na.pct <- ((na.cnt/length(v.tile)) * 100)

	df.tile.stats <- data.frame(

		# basic info
		file = f.tif.base,
		xmin = ext@xmin,
		xmax = ext@xmax,
		ymin = ext@ymin,
		ymax = ext@ymax,

		# pixel-based stats
		na_cnt = na.cnt,
		na_pct = na.pct,
		mean_rscd = NA,
		median_rscd = NA,
		rmsd = NA,

		# histogram stats
		min_hist_cnt = NA,
		max_hist_cnt = NA,
		std_hist_cnt = NA,
		range_hist_cnt = NA,
		bin_1_cnt = NA,
		bin_2_cnt = NA,
		bin_3_cnt = NA,
		bin_4_cnt = NA,
		bin_5_cnt = NA,
		bin_6_cnt = NA,
		bin_7_cnt = NA,
		bin_8_cnt = NA,
		bin_9_cnt = NA

	)

	# check that a high enough percent of cells contain valid data
	if (na.pct < 20) {

		# get meaningful bounds (mg/ha)
		qnts.mgha <- quantile(v.tile, probs = c(0.02, 0.98), na.rm = T, names = F)
		min.mgha <- qnts.mgha[1]
		max.mgha <- qnts.mgha[2]

		# clip bounds and replace NAs with min
		v.tile[na.ind] <- min.mgha
		v.tile[v.tile < min.mgha] <- min.mgha
		v.tile[v.tile > max.mgha] <- max.mgha

		# rescale values from 0 to 100
		v.tile.rscd <- (((v.tile - min.mgha) / (max.mgha - min.mgha)) * 100)

		# get descriptive stats (rescaled pixels)
		avg.rscd <- mean(v.tile.rscd)
		med.rscd <- median(v.tile.rscd)

		# --------------------------------------------
		# histogram
		# --------------------------------------------

		# get histogram with 9 bins (because 9 seed colors in stimulus color scale)
		tile.hist <- hist(v.tile.rscd, breaks = seq(0, 100, length.out = 10), plot = F)
		hist.cnts <- tile.hist$counts

		# get stats of the histogram bins
		min.hist.cnt <- min(hist.cnts)
		max.hist.cnt <- max(hist.cnts)
		std.hist.cnt <- sd(hist.cnts)
		rng.hist.cnt <- abs(max.hist.cnt - min.hist.cnt)

		# get root mean square deviation (rmsd)
		expd.cnts <- rep(mean(hist.cnts), length(hist.cnts))
		rmsd <- sqrt(mean( ((hist.cnts - expd.cnts) ^ 2) ))

		# --------------------------------------------
		# combine stats
		# --------------------------------------------

		# pixel-based stats
		df.tile.stats$mean_rscd <- avg.rscd
		df.tile.stats$median_rscd <- med.rscd
		df.tile.stats$rmsd <- rmsd

		# histogram stats
		df.tile.stats$min_hist_cnt <- min.hist.cnt
		df.tile.stats$max_hist_cnt <- max.hist.cnt
		df.tile.stats$std_hist_cnt <- std.hist.cnt
		df.tile.stats$range_hist_cnt <- rng.hist.cnt

		# histogram bin counts
		df.tile.stats[,paste0('bin_', 1:9, '_cnt')] <- rbind(hist.cnts)

	}

	# save to disk
	write.csv(df.tile.stats, file = paste0(csv.dir, gsub('\\.tif$', '.csv', f.tif.base)), row.names = F)

	return(df.tile.stats)
	
}

# save combined results to disk
csv.out <- 'output/stats_all_tiles.csv'
cat(paste('Writing', csv.out, '...\n'))
write.csv(df.out, file = csv.out, row.names = F)

