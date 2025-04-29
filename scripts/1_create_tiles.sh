#!/bin/bash
set -e
#
# 1_create_tiles.sh
#
# Purpose:
#	To download Harris et al. 2021 (Nature Climate Change) 30m aboveground biomass 
#	tiles (40,000 x 40,000 pixels) and split them into smaller (1,000 x 1,000 pixel) 
#	tiles, only keeping subtiles that have valid data pixels.
#
# History:
#	Written by Seth Gorelik, 10/5/25
#
# Notes:
#	1. The original tile list was downloaded from:
#	   https://data.globalforestwatch.org/datasets/gfw::aboveground-live-woody-biomass-density/about
#
#	2. It took ~3 hours to run with 96 CPUs.
#

# set output directory
OUTPUT_DIR=/data/harris30m/tiles
mkdir -p $OUTPUT_DIR
echo "Output Directory: $OUTPUT_DIR"

# iterate through tiles sequentially
tail -n +2 etc/Aboveground_Live_Woody_Biomass_Density.csv | while read ROW
do

    # get tile id
    BIGTILE_ID=$(echo $ROW | cut -d ',' -f 1)
    
    # set output tile path
    BIGTILE_FILE=/data/harris30m/harris_"$BIGTILE_ID".tif

    # get tile url
    URL=$(echo $ROW | cut -d ',' -f 2)

    # download tile
    wget --quiet --output-document=$BIGTILE_FILE $URL
    
    # split the big tile into subtiles using parallelized worker script
    ./etc/split_bigtile.sh $BIGTILE_ID $BIGTILE_FILE $OUTPUT_DIR
    
    # upload subtiles to bucket
    gsutil -m cp $OUTPUT_DIR/*.tif gs://uw-ks-data/harris30m/tiles1000/ &> /dev/null
    
    # delete tile and subtiles
    rm $BIGTILE_FILE $OUTPUT_DIR/*.tif
    
done


