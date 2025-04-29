#!/usr/bin/env Rscript
#
# functions.R
# 
# Purpose:
#	Helper functions.
#
# History:
#	Written by Seth Gorelik, 10/6/24
#

library(raster)
library(dplyr)
library(ggplot2)
library(patchwork)
library(ggh4x)
library(scales)
library(viridis)


# better rounding function (i.e., normal rounding)
# converts to integer if digits = 0
round2 <- function(x, digits = 0) {
	# function adapted from https://stackoverflow.com/a/12688836
	posneg <- sign(x)
	z <- abs(x) * 10 ^ digits
	z <- z + 0.5 + sqrt(.Machine$double.eps)
	z <- trunc(z)
	z <- z / 10 ^ digits
	x.new <- z * posneg
	if (digits == 0) {
		x.new <- as.integer(x.new)
	}
	return(x.new)
}


# function to rescale rasters from ≥0 Mg/ha to a range of 0-100 
get.rescaled.raster <- function(f) {
	
	# local raster path
	f.local <- paste0('~/data/harris30m/tif/', f)
	
	# download tile
	if (!file.exists(f.local)) {
		system(paste0('gsutil -m cp gs://uw-ks-data/harris30m/tiles1000/', f, ' ~/data/harris30m/tif/'), ignore.stdout = T, ignore.stderr = T)
	}
	
	# read raster
	r <- raster(f.local)
	v <- values(r)
	
	# get meaningful bounds (mg/ha)
	qnts.mgha <- quantile(v, probs = c(0.02, 0.98), na.rm = T, names = F)
	min.mgha <- qnts.mgha[1]
	max.mgha <- qnts.mgha[2]
	
	# clip bounds
	v[v < min.mgha] <- min.mgha
	v[v > max.mgha] <- max.mgha
	
	# rescale values from 0 to 100
	values(r) <- (((v - min.mgha) / (max.mgha - min.mgha)) * 100)
	names(r) <- 'value'
	
	return(r)
	
}


# function to plot histogram and map
preview.map <- function(f, pal = viridis(256, direction = -1), title = NULL, with_hist = T, with_legend = T) {
	
	# get raster
	r <- get.rescaled.raster(f)
	
	# convert to data frame
	r.df <- as.data.frame(r, xy = T)
	
	# plot title
	if (is.null(title)) title <- f
	
	p.title <- plot_annotation(
		title = title, 
		theme = theme(
			plot.title = element_text(face = 'bold', hjust = 0.5)
		)
	)
				  
	# plot map
	if (with_legend) {
		
		p.map <- ggplot(data = r.df, aes(x = x, y = y, fill = value)) +
			geom_raster() +
			scale_fill_gradientn(colors = pal, guide = guide_colorbar(
				frame.colour = 'black', 
				ticks = F, 
				barheight = unit(0.4, 'npc'),
				title = NULL,
				frame.linewidth = 1/.pt
			)) +
			coord_equal() +
			theme_void() +
			theme(
				legend.text = element_text(size = 12)
			)
	} else {
		
		p.map <- ggplot(data = r.df, aes(x = x, y = y, fill = value)) +
			geom_raster() +
			scale_fill_gradientn(colors = pal) +
			coord_equal() +
			theme_void() +
			theme(legend.position = 'none')
		
	}
	
	if (with_hist) {
		
		# compute histogram
		brks <- seq(0, 100, length.out = 10)
		hist <- hist(r, breaks = brks, plot = F)
		cnts <- hist$counts
		mids <- hist$mids
		
		# plot histogram
		p.hist <- ggplot() +
			geom_col(aes(x = mids, y = cnts), color = 'black', fill = 'gray', width = brks[2]) +
			scale_x_continuous(guide = guide_axis_truncated(), breaks = seq(0, 100, by = 20)) +
			scale_y_continuous(guide = guide_axis_truncated(), limits = c(0, 150000), labels = comma) +
			labs(x = NULL, y = NULL, title = NULL) +
			coord_fixed(ratio = 50/max(cnts), clip = 'off') +
			theme_classic() +
			theme(
				axis.text = element_text(size = 12),
				axis.ticks.length = unit(8, 'points')
			)
		
		plot((p.hist / p.map) + p.title)
		
	} else {
		
		plot(p.map + p.title)
		
	}
	
}


# function to save geotiff as a png file using a provided color scale
save.map.png <- function(inp_tif, pal, out_png) {
	
	# open geotiff from disk, rescaled from 0 to 100
	r <- get.rescaled.raster(inp_tif)
	
	# convert to integer
	values(r) <- round2(values(r))
	
	# save map to PNG file on disk 
	png(filename = out_png, width = 1000, height = 1000, units = 'px')
	par(mar = c(0, 0, 0, 0))
	image(r, axes = F, asp = 1, useRaster = T, col = pal)
	dev.off()

}

