import os
import json
from itertools import combinations, product

# Define the directory and output file
output_path = '../exp1_conditions.js'

map_nums =['02','05','07','10','12','13','15','23','26','27','28','30','33','37','41','44']
lightness_levels = ['L','D']
saturation_levels = ['S','U']
hue_levels = ['R','G','B','Y']

def get_color_combinations():
    combinations = product(hue_levels,lightness_levels, saturation_levels,map_nums)
    cond_combs =  ['_'.join(combination) for combination in combinations]
    cond_combs = ['images/'+x+'.png' for x in cond_combs]
    return cond_combs

conditions = get_color_combinations()
### create empty 100x100 images with filenames as each item in conditions
# for condition in conditions:
#     os.system(f"convert -size 100x100 xc:white {condition}")

output_dict = {}
for condition in conditions:
    output_dict[condition] = {'hue':condition.split('_')[0].split('/')[1],
                              'lightness':condition.split('_')[1],
                              'saturation':condition.split('_')[2]}
    

combinations = product(hue_levels,lightness_levels, saturation_levels)
cond_combs =  ['_'.join(combination) for combination in combinations]

# Write the dictionary to the output file
with open(output_path, 'w') as f:
    f.write('var affect_list = ["calm", "exciting", "positive", "negative", "serious", "playful", "trustworthy", "disturbing"];')
    f.write('\n')
    f.write('var im2cond_dict = ' + json.dumps(output_dict, indent=2) + ';')
    f.write('\n')
    f.write('var color_scales = ' + json.dumps(cond_combs, indent=2) + ';')

print(f"File written to {output_path}")