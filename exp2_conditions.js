var affect_list = ["calm", "positive", "negative", "startling"];
var im2cond_dict = {
  "images/R_L_S_2_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_2_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_5_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_5_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_7_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_7_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_10_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_10_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_12_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_12_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_13_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_13_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_15_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_15_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_23_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_23_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_26_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_26_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_27_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_27_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_28_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_28_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_30_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_30_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_33_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_33_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_37_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_37_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_41_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_41_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_S_44_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_L_S_44_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_L_U_2_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_2_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_5_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_5_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_7_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_7_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_10_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_10_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_12_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_12_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_13_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_13_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_15_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_15_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_23_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_23_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_26_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_26_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_27_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_27_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_28_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_28_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_30_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_30_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_33_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_33_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_37_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_37_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_41_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_41_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_L_U_44_darkshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_L_U_44_lightshift.png": {
    "hue": "R",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_S_2_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_2_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_5_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_5_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_7_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_7_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_10_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_10_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_12_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_12_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_13_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_13_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_15_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_15_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_23_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_23_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_26_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_26_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_27_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_27_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_28_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_28_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_30_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_30_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_33_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_33_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_37_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_37_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_41_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_41_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_S_44_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/R_D_S_44_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/R_D_U_2_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_2_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_5_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_5_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_7_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_7_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_10_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_10_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_12_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_12_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_13_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_13_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_15_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_15_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_23_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_23_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_26_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_26_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_27_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_27_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_28_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_28_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_30_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_30_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_33_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_33_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_37_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_37_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_41_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_41_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/R_D_U_44_darkshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/R_D_U_44_lightshift.png": {
    "hue": "R",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_S_2_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_2_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_5_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_5_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_7_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_7_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_10_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_10_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_12_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_12_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_13_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_13_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_15_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_15_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_23_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_23_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_26_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_26_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_27_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_27_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_28_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_28_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_30_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_30_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_33_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_33_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_37_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_37_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_41_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_41_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_S_44_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_L_S_44_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_L_U_2_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_2_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_5_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_5_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_7_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_7_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_10_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_10_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_12_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_12_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_13_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_13_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_15_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_15_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_23_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_23_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_26_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_26_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_27_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_27_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_28_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_28_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_30_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_30_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_33_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_33_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_37_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_37_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_41_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_41_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_L_U_44_darkshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_L_U_44_lightshift.png": {
    "hue": "G",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_S_2_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_2_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_5_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_5_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_7_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_7_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_10_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_10_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_12_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_12_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_13_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_13_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_15_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_15_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_23_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_23_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_26_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_26_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_27_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_27_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_28_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_28_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_30_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_30_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_33_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_33_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_37_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_37_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_41_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_41_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_S_44_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/G_D_S_44_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/G_D_U_2_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_2_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_5_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_5_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_7_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_7_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_10_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_10_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_12_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_12_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_13_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_13_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_15_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_15_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_23_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_23_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_26_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_26_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_27_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_27_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_28_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_28_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_30_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_30_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_33_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_33_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_37_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_37_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_41_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_41_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/G_D_U_44_darkshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/G_D_U_44_lightshift.png": {
    "hue": "G",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_S_2_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_2_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_5_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_5_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_7_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_7_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_10_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_10_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_12_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_12_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_13_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_13_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_15_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_15_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_23_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_23_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_26_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_26_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_27_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_27_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_28_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_28_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_30_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_30_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_33_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_33_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_37_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_37_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_41_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_41_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_S_44_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_L_S_44_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_L_U_2_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_2_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_5_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_5_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_7_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_7_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_10_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_10_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_12_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_12_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_13_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_13_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_15_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_15_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_23_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_23_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_26_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_26_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_27_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_27_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_28_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_28_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_30_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_30_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_33_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_33_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_37_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_37_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_41_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_41_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_L_U_44_darkshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_L_U_44_lightshift.png": {
    "hue": "B",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_S_2_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_2_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_5_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_5_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_7_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_7_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_10_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_10_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_12_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_12_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_13_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_13_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_15_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_15_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_23_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_23_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_26_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_26_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_27_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_27_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_28_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_28_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_30_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_30_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_33_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_33_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_37_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_37_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_41_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_41_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_S_44_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/B_D_S_44_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/B_D_U_2_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_2_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_5_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_5_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_7_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_7_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_10_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_10_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_12_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_12_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_13_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_13_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_15_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_15_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_23_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_23_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_26_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_26_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_27_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_27_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_28_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_28_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_30_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_30_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_33_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_33_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_37_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_37_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_41_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_41_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/B_D_U_44_darkshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/B_D_U_44_lightshift.png": {
    "hue": "B",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_S_2_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_2_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_5_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_5_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_7_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_7_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_10_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_10_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_12_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_12_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_13_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_13_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_15_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_15_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_23_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_23_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_26_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_26_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_27_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_27_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_28_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_28_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_30_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_30_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_33_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_33_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_37_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_37_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_41_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_41_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_S_44_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_L_S_44_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_L_U_2_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_2_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_5_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_5_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_7_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_7_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_10_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_10_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_12_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_12_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_13_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_13_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_15_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_15_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_23_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_23_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_26_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_26_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_27_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_27_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_28_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_28_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_30_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_30_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_33_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_33_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_37_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_37_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_41_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_41_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_L_U_44_darkshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_L_U_44_lightshift.png": {
    "hue": "Y",
    "lightness": "L",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_S_2_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_2_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_5_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_5_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_7_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_7_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_10_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_10_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_12_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_12_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_13_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_13_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_15_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_15_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_23_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_23_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_26_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_26_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_27_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_27_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_28_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_28_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_30_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_30_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_33_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_33_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_37_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_37_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_41_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_41_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_S_44_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "darkshift"
  },
  "images/Y_D_S_44_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "S",
    "shift": "lightshift"
  },
  "images/Y_D_U_2_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_2_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_5_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_5_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_7_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_7_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_10_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_10_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_12_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_12_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_13_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_13_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_15_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_15_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_23_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_23_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_26_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_26_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_27_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_27_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_28_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_28_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_30_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_30_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_33_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_33_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_37_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_37_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_41_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_41_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
  },
  "images/Y_D_U_44_darkshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "darkshift"
  },
  "images/Y_D_U_44_lightshift.png": {
    "hue": "Y",
    "lightness": "D",
    "saturation": "U",
    "shift": "lightshift"
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