#!/usr/bin/env Rscript
#
# plot_hists.R
# 
# Purpose:
#	Plot histgoram charts for each of the 44 tiles
#
# History:
#	Written by Seth Gorelik, 3/23/25
#

library(dplyr)
library(tidyr)
library(ggplot2)

df <- read.csv('output/stats_filtered_tiles_set1.csv', stringsAsFactors = F)
nrow(df) # 44

df.p <- df %>% 
	select(map_id, starts_with('bin')) %>% 
	pivot_longer(
		cols = starts_with('bin'), 
		values_to = 'cnt',
		names_to = 'bin', 
		names_pattern = 'bin_(.)_cnt',
		names_transform = list(bin = as.integer)
	)

p <- ggplot(df.p, aes(x = bin, y = cnt/1e3)) +
	facet_wrap(~map_id, nrow = 5, ncol = 9, scales = 'free') +
	geom_col(width = .9, fill = 'black', color = NA, linewidth = 0) +
	scale_x_continuous(expand = c(0.02, 0.02)) +
	scale_y_continuous(breaks = c(0, 80, 160), limits = c(0, 160), expand = c(0, 0)) +
	labs(x = NULL, y = 'Thousands of pixels') +
	theme(
		axis.title.y = element_text(color = 'black', size = 10),
		axis.text.x = element_blank(),
		axis.text.y = element_text(color = 'black'),
		axis.ticks.x = element_blank(),
		axis.ticks.y = element_line(color = 'black', linewidth = 0.5),
		axis.line = element_line(color = 'black', linewidth = 0.5),
		panel.grid.major = element_blank(),
		panel.grid.minor = element_blank(),
		panel.background = element_blank(),
		strip.background = element_blank(),
		strip.text = element_text(color = 'black'),
		panel.spacing.y = unit(2, 'lines'),
		plot.background = element_rect(color = 'transparent', fill = 'transparent')
	)

pdf(file = 'output/hists.pdf', width = 8, height = 5, paper = 'letter')
plot(p)
dev.off()

