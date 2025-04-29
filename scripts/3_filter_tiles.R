#!/usr/bin/env Rscript
#
# 3_filter_tiles.R
# 
# Purpose:
#	To determine which tiles to use as initial set of stimuli, and save 
#	filtered set of maps as gray scale PNGs.
#
# History:
#	Written by Seth Gorelik, 9/22/24
#	Updated by Seth Gorelik, 10/6/24, to filter 30m tiles
#

source('etc/functions.R')

# ---------------------------------------------------------------------
# initial filtering of tiles (down from >200,000 to <60) 
# ---------------------------------------------------------------------

# read in table of tile stats
df <- read.csv('output/stats_all_tiles.csv', stringsAsFactors = F)

# bin count under uniform distribution
uniform.bin.cnt <- 1000*1000/9

# set lower and upper bounds for bin counts
lwr.cnt <- uniform.bin.cnt * (2/3)
upr.cnt <- uniform.bin.cnt * (4/3)

# filter tiles
df.f <- df %>%
	
	# remove tiles with NAs
	filter(na_cnt == 0) %>% 
	
	# remove tiles with skewed distribution
	filter((median_rscd > 40) & (median_rscd < 60)) %>% 
	
	# remove tiles with very low or very high bin counts
	filter(min_hist_cnt > lwr.cnt & max_hist_cnt < upr.cnt) %>% 
	
	# sort by std
	arrange(std_hist_cnt)

# number of tiles after filters
nrow(df.f) # 44

# view list of tiles (initial set)
df.f %>% 
	select(file, median_rscd, min_hist_cnt, max_hist_cnt, std_hist_cnt, range_hist_cnt)

# review results
# preview.map(paste0('tile_00N_020E_subtile_24000_39000', '.tif'))

# pretty ones form the amazon:
# tile_00N_060W_subtile_37000_04000 - so cool! rivers!
# tile_00N_060W_subtile_39000_04000
# tile_00N_060W_subtile_36000_05000

# add map id to table
df.f <- df.f %>% 
	mutate(map_id = row.names(.), .before = file)

# save table to csv on disk
write.csv(df.f, file = 'output/stats_filtered_tiles_set1.csv', row.names = F)

# ---------------------------------------------------------------------
# save initial set of maps as gray scale PNGs (for first phase)
# ---------------------------------------------------------------------

# gray color scale with 9 steps
gray.pal <- c('#FFFFFF', '#F0F0F0', '#E0E0E0', '#CECECE', '#BABABA', '#A3A3A3', '#888888', '#636363', '#000000')

# set output directory
out.dir <- 'output/gray_highres_maps/'
dir.create(out.dir, showWarnings = F)

# save maps as gray scale PNGs
for (i in 1:nrow(df.f)) {
	
	cat(paste0('Map ', i, '/', nrow(df.f), ':'), fill = T)
	
	inp.tif <- df.f$file[i]
	cat(paste(' Input:', inp.tif), fill = T)
	
	map.id <- df.f$map_id[i]
	out.png <- paste0(out.dir, 'gray_', sprintf("%02d", map.id), '.png')
	cat(paste(' Output:', basename(out.png)), fill = T)
	
	save.map.png(inp_tif = inp.tif, pal = gray.pal, out_png = out.png)
	
}

