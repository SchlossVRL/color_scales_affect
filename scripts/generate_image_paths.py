import os
import json

# Define the directory and output file
dir_path = '../images'
output_path = '../imagePaths.js'

# Read the directory
files = os.listdir(dir_path)

# Filter the files to only include those that start with "gray"
gray_files = [file for file in files if file.startswith('gray')]

# Create the dictionary
maps = {str(i): "images/"+file for i, file in enumerate(gray_files)}

# Write the dictionary to the output file
with open(output_path, 'w') as f:
    f.write('var maps = ' + json.dumps(maps, indent=2) + ';')

print(f"File written to {output_path}")