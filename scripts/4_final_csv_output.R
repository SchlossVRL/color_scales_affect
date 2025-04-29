#!/usr/bin/env Rscript
#
# 4_final_csv_output.R
# 
# Purpose:
#	To compile a single CSV of the values for final set of tiles. Each row 
#	in output CSV will correspond to a single map and will contain the Map 
#	ID followed by all 1,000,000 integer values (ranging from 0 to 100) in
#	that map.
#
# History:
#	Written by Seth Gorelik, 10/17/24
#

source('etc/functions.R')

# final list of maps from karen
map.id.list <- c(02, 05, 07, 10, 12, 13, 15, 23, 26, 27, 28, 30, 33, 37, 41, 44)
num.maps <- length(map.id.list) # 16

# get initial tile set
df <- read.csv('output/stats_filtered_tiles_set1.csv', stringsAsFactors = F)
nrow(df) # 44

# get geotiff associated with each map id
df.f <- df %>% 
	filter(map_id %in% map.id.list) %>% 
	select(map_id, file)

# double check number of maps
stopifnot(nrow(df.f) == num.maps)

# export map values to single csv
csv.out <- 'output/map_values_V2.csv'
for (i in 1:num.maps) {
	
	cat(paste0('Map ', i, '/', num.maps, ':'), fill = T)
	
	map.id <- df.f$map_id[i]
	cat(paste(' Map ID:', map.id), fill = T)

	inp.tif <- df.f$file[i]
	cat(paste(' Input:', inp.tif), fill = T)
	
	# get raster values, rescaled and converted to integer vector
	r <- get.rescaled.raster(inp.tif)
	v <- round2(values(r))
	
	# write map id and values to row of output csv on disk
	row <- paste0(map.id, ',', paste0(v, collapse = ','))
	write(row, file = csv.out, append = T)
}
