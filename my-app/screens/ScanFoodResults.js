import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ScanFoodResults = () => {
  return (
    <View style={styles.scanFoodResults}>
      <Image
        style={styles.pexelsGriffinWooldridge2657Icon}
        contentFit="cover"
        source={require("../assets/pexelsgriffinwooldridge2657960-1.png")}
      />
      <View style={[styles.scanFoodResultsChild, styles.scanPosition]} />
      <LinearGradient
        style={[styles.scanFoodResultsItem, styles.scanPosition]}
        locations={[0, 1]}
        colors={["rgba(0, 0, 0, 0.84)", "rgba(51, 51, 51, 0)"]}
      />
      <Image
        style={[styles.scanFoodResultsInner, styles.stroke2IconLayout]}
        contentFit="cover"
        source={require("../assets/group-29.png")}
      />
      <Image
        style={[styles.stroke2Icon, styles.stroke2IconLayout]}
        contentFit="cover"
        source={require("../assets/stroke-2.png")}
      />
      <View style={[styles.modelight, styles.scanPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <View style={styles.rectangleView} />
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-36203.png")}
      />
      <View style={styles.scanFoodResultsChild1} />
      <Text style={[styles.details, styles.detailsTypo]}>Details</Text>
      <Text style={[styles.ingredients, styles.detailsTypo]}>Ingredients</Text>
      <Text style={[styles.aHamburgerAlsoContainer, styles.proteinTypo]}>
        <Text
          style={styles.aHamburgerAlso}
        >{`A hamburger (also burger for short) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread  `}</Text>
        <Text style={[styles.readMore, styles.readMoreTypo]}>Read More...</Text>
      </Text>
      <View style={[styles.scanFoodResultsChild2, styles.scanChildLayout]} />
      <View style={[styles.scanFoodResultsChild3, styles.scanChildLayout]} />
      <View style={[styles.scanFoodResultsChild4, styles.scanChildLayout]} />
      <View style={[styles.scanFoodResultsChild5, styles.scanChildLayout]} />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.addToFavorites, styles.readMoreTypo]}>
          Add To Favorites
        </Text>
      </View>
      <View style={[styles.proteinParent, styles.parentPosition]}>
        <Text style={[styles.protein, styles.gClr]}>Protein</Text>
        <Text style={[styles.g, styles.gClr]}>450g</Text>
      </View>
      <View style={[styles.caloriesParent, styles.parentPosition]}>
        <Text style={[styles.protein, styles.gClr]}>Calories</Text>
        <Text style={[styles.g, styles.gClr]}>220g</Text>
      </View>
      <View style={[styles.fatParent, styles.parentPosition]}>
        <Text style={[styles.protein, styles.gClr]}>Fat</Text>
        <Text style={[styles.g, styles.gClr]}>100g</Text>
      </View>
      <View style={[styles.carbsParent, styles.parentPosition]}>
        <Text style={[styles.protein, styles.gClr]}>Carbs</Text>
        <Text style={[styles.g, styles.gClr]}>49g</Text>
      </View>
      <Image
        style={styles.burger1Icon}
        contentFit="cover"
        source={require("../assets/burger-1.png")}
      />
      <Image
        style={styles.tomato1Icon}
        contentFit="cover"
        source={require("../assets/tomato-1.png")}
      />
      <Image
        style={[styles.salad11, styles.salad11Position]}
        contentFit="cover"
        source={require("../assets/salad-1-1.png")}
      />
      <Image
        style={[styles.bread1Icon, styles.salad11Position]}
        contentFit="cover"
        source={require("../assets/bread-1.png")}
      />
      <Text style={[styles.viewAll, styles.gClr]}>View All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  scanPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  stroke2IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  detailsTypo: {
    color: Color.bordersBackgroundsBlack,
    lineHeight: 31,
    fontSize: FontSize.size_3xl,
    height: "3.82%",
    textAlign: "left",
    fontFamily: FontFamily.signika,
    letterSpacing: 0,
    left: "8.8%",
    position: "absolute",
  },
  proteinTypo: {
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  readMoreTypo: {
    fontWeight: "600",
    fontFamily: FontFamily.signika,
  },
  scanChildLayout: {
    height: 64,
    width: 64,
    borderRadius: Border.br_base,
    top: 608,
    backgroundColor: Color.colorFloralwhite,
    position: "absolute",
  },
  groupChildLayout: {
    height: 72,
    width: 290,
    position: "absolute",
  },
  parentPosition: {
    height: 54,
    top: 310,
    position: "absolute",
  },
  gClr: {
    color: Color.colorSalmon_100,
    fontFamily: FontFamily.signika,
    letterSpacing: 0,
    position: "absolute",
  },
  salad11Position: {
    top: 620,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  pexelsGriffinWooldridge2657Icon: {
    left: -74,
    width: 459,
    height: 687,
    top: 0,
    position: "absolute",
  },
  scanFoodResultsChild: {
    height: 812,
    opacity: 0.15,
    backgroundColor: Color.bordersBackgroundsBlack,
    top: 0,
  },
  scanFoodResultsItem: {
    height: 56,
    backgroundColor: "transparent",
    top: 0,
  },
  scanFoodResultsInner: {
    height: "30.91%",
    width: "66.93%",
    top: "26.85%",
    right: "16.53%",
    bottom: "42.24%",
    left: "16.53%",
  },
  stroke2Icon: {
    height: "0.6%",
    width: "1.28%",
    top: "32.34%",
    right: "56.69%",
    bottom: "67.06%",
    left: "42.03%",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  modelight: {
    top: 778,
    height: 34,
  },
  rectangleView: {
    top: 72,
    borderTopLeftRadius: Border.br_13xl,
    borderTopRightRadius: Border.br_13xl,
    height: 741,
    left: 1,
    width: 375,
    position: "absolute",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  groupIcon: {
    height: "1.97%",
    width: "4.27%",
    top: "12.81%",
    right: "86.93%",
    bottom: "85.22%",
    left: "8.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  scanFoodResultsChild1: {
    top: 282,
    height: 110,
    backgroundColor: Color.colorFloralwhite,
    left: 1,
    width: 375,
    position: "absolute",
  },
  details: {
    width: "17.33%",
    top: "51.23%",
    textAlign: "left",
  },
  ingredients: {
    width: "28%",
    top: "69.09%",
    textAlign: "left",
  },
  aHamburgerAlso: {
    color: "#a9a9a9",
    fontFamily: FontFamily.signika,
  },
  readMore: {
    color: "#7cbc71",
  },
  aHamburgerAlsoContainer: {
    top: 455,
    lineHeight: 22,
    width: 304,
    left: 33,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  scanFoodResultsChild2: {
    left: 33,
  },
  scanFoodResultsChild3: {
    left: 113,
  },
  scanFoodResultsChild4: {
    left: 193,
  },
  scanFoodResultsChild5: {
    left: 273,
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorDarkseagreen,
    left: 0,
    top: 0,
  },
  addToFavorites: {
    top: 21,
    left: 49,
    fontSize: FontSize.size_6xl,
    letterSpacing: 1.3,
    color: Color.bordersBackgroundsWhiteBackground,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 691,
    left: 43,
  },
  protein: {
    lineHeight: 20,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  g: {
    top: 20,
    fontSize: FontSize.size_5xl,
    lineHeight: 34,
    textAlign: "left",
    left: 0,
  },
  proteinParent: {
    width: 51,
    height: 54,
    top: 310,
    left: 33,
  },
  caloriesParent: {
    left: 120,
    width: 55,
    top: 310,
    height: 54,
  },
  fatParent: {
    left: 211,
    width: 51,
    height: 54,
    top: 310,
  },
  carbsParent: {
    left: 298,
    width: 39,
    top: 310,
    height: 54,
  },
  burger1Icon: {
    top: 128,
    left: 118,
    width: 140,
    height: 140,
    position: "absolute",
    overflow: "hidden",
  },
  tomato1Icon: {
    top: 619,
    left: 125,
    height: 40,
    width: 40,
    position: "absolute",
    overflow: "hidden",
  },
  salad11: {
    left: 205,
  },
  bread1Icon: {
    left: 45,
  },
  viewAll: {
    top: 623,
    left: 291,
    fontSize: FontSize.headingHeading5_size,
    lineHeight: 17,
    textAlign: "center",
    width: 28,
  },
  scanFoodResults: {
    flex: 1,
    width: "100%",
    height: 804,
    overflow: "hidden",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default ScanFoodResults;
