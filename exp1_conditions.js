var affect_list = ["calm", "exciting", "positive", "negative", "serious", "playful", "trustworthy", "disturbing"];
var im2cond_dict = {
  "images/R_L_S_02.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_05.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_07.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_10.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_12.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_13.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_15.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_23.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_26.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_27.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_28.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_30.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_33.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_37.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_41.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_S_44.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S"
  },
  "images/R_L_U_02.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_05.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_07.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_10.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_12.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_13.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_15.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_23.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_26.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_27.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_28.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_30.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_33.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_37.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_41.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_L_U_44.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U"
  },
  "images/R_D_S_02.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_05.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_07.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_10.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_12.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_13.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_15.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_23.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_26.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_27.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_28.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_30.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_33.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_37.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_41.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_S_44.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S"
  },
  "images/R_D_U_02.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_05.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_07.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_10.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_12.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_13.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_15.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_23.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_26.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_27.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_28.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_30.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_33.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_37.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_41.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/R_D_U_44.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_L_S_02.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_05.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_07.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_10.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_12.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_13.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_15.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_23.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_26.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_27.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_28.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_30.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_33.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_37.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_41.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_S_44.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S"
  },
  "images/G_L_U_02.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_05.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_07.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_10.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_12.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_13.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_15.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_23.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_26.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_27.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_28.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_30.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_33.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_37.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_41.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_L_U_44.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U"
  },
  "images/G_D_S_02.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_05.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_07.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_10.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_12.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_13.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_15.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_23.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_26.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_27.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_28.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_30.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_33.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_37.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_41.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_S_44.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S"
  },
  "images/G_D_U_02.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_05.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_07.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_10.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_12.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_13.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_15.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_23.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_26.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_27.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_28.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_30.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_33.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_37.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_41.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/G_D_U_44.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_L_S_02.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_05.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_07.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_10.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_12.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_13.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_15.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_23.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_26.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_27.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_28.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_30.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_33.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_37.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_41.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_S_44.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S"
  },
  "images/B_L_U_02.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_05.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_07.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_10.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_12.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_13.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_15.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_23.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_26.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_27.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_28.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_30.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_33.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_37.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_41.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_L_U_44.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U"
  },
  "images/B_D_S_02.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_05.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_07.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_10.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_12.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_13.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_15.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_23.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_26.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_27.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_28.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_30.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_33.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_37.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_41.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_S_44.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S"
  },
  "images/B_D_U_02.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_05.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_07.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_10.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_12.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_13.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_15.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_23.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_26.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_27.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_28.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_30.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_33.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_37.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_41.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/B_D_U_44.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_L_S_02.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_05.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_07.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_10.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_12.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_13.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_15.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_23.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_26.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_27.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_28.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_30.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_33.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_37.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_41.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_S_44.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S"
  },
  "images/Y_L_U_02.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_05.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_07.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_10.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_12.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_13.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_15.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_23.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_26.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_27.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_28.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_30.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_33.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_37.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_41.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_L_U_44.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U"
  },
  "images/Y_D_S_02.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_05.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_07.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_10.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_12.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_13.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_15.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_23.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_26.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_27.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_28.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_30.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_33.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_37.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_41.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_S_44.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S"
  },
  "images/Y_D_U_02.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_05.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_07.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_10.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_12.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_13.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_15.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_23.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_26.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_27.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_28.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_30.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_33.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_37.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_41.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  },
  "images/Y_D_U_44.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U"
  }
};
var color_scales = [
  "R_L_S",
  "R_L_U",
  "R_D_S",
  "R_D_U",
  "G_L_S",
  "G_L_U",
  "G_D_S",
  "G_D_U",
  "B_L_S",
  "B_L_U",
  "B_D_S",
  "B_D_U",
  "Y_L_S",
  "Y_L_U",
  "Y_D_S",
  "Y_D_U"
];