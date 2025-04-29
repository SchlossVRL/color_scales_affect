#!/usr/bin/env Rscript
#
# plot_maps.R
# 
# Purpose:
#	This script will export maps with the user-provided color scale as
#	PNG files to the user-provided output directory. The output files
#	will have the following naming convention:
#		"[color scale name]_[map id].png"
#
# History:
#	Written by Seth Gorelik, 9/22/24
#	Updated by Seth Gorelik, 10/17/24, for new map names and larger 
#		input csv file (uses the more efficient data.table package)
#

# install.packages('data.table')
library(data.table)

# ====================================================================
# USER SETTINGS
# ====================================================================

# replace with 9 colors (as hex codes) from Color Crafter: https://danielleszafir.com/ColorCrafter/
color.scale.hex <- c('#FFFFFF', '#F0F0F0', '#E0E0E0', '#CECECE', '#BABABA', '#A3A3A3', '#888888', '#636363', '#000000')

# give color scale a code name
color.scale.name <- 'gray'

# set path to input CSV file
inp.csv <- 'map_values_V2.csv'

# set output directory
out.dir <- '~/output_maps/'

# ====================================================================
# DON'T CHANGE CODE BELOW
# ====================================================================

# input table of map values (one row per map)
df <- fread(file = inp.csv, header = F, data.table = F)

# create user-provided output directory if it doesn't exist
dir.create(out.dir, showWarnings = F)

# loop through maps
for (i in 1:nrow(df)) {

	# create map name
	map.id <- df[i, 1]
	out.png <- paste0(out.dir, color.scale.name, '_', sprintf("%02d", map.id), '.png')
	cat(paste('Writing', out.png, '...'), fill = T)
	
	# get map values, transform into matrix
	v <- as.numeric(df[i, -1])
	m <- matrix(data = v, nrow = 1000, ncol = 1000)
	mr <- apply(m, 1, rev)
	mrt <- t(mr)
	
	# save map to PNG file in output directory, applying user-provided color scale
	png(filename = out.png, width = 1000, height = 1000, units = 'px')
	par(mar = c(0, 0, 0, 0))
	image(mrt, axes = F, asp = 1, useRaster = T, col = color.scale.hex)
	dev.off()
	
}
