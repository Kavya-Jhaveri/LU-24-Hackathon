import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const FavoritesFood1 = () => {
  return (
    <View style={[styles.favoritesFood, styles.favoritesFoodLayout]}>
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.statusBar, styles.statusPosition]}>
        <View style={[styles.statusBarChild, styles.borderPosition]} />
        <View style={[styles.barsStatusBarIphoneL, styles.statusPosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconLayout1]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityBg]} />
          </View>
          <Image
            style={styles.wifiIcon}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
          <View style={styles.timeStyle}>
            <Text style={[styles.time, styles.timeTypo]}>9:41</Text>
          </View>
        </View>
        <Text style={[styles.dailyPractice, styles.timeTypo]}>Favorites</Text>
        <Image
          style={[styles.component1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sizes-iconarrow-back-ios.png")}
        />
        <Image
          style={[styles.component2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-21.png")}
        />
      </View>
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Text style={styles.foodDiary}>{`Food Diary
`}</Text>
      <View style={[styles.favoritesFoodChild, styles.favoritesLayout]} />
      <View style={[styles.favoritesFoodItem, styles.favoritesBg]} />
      <View style={[styles.favoritesFoodInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.favoritesFoodChild1, styles.favoritesChildLayout]} />
      <View style={[styles.favoritesFoodChild2, styles.favoritesChildLayout]} />
      <Image
        style={styles.favoritesFoodChild3}
        contentFit="cover"
        source={require("../assets/group-36212.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector14.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector15.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <Image
        style={[styles.page1Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/page-1.png")}
      />
      <Image
        style={[styles.xmlid1691Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/xmlid-1691.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIcon1Layout]}
        contentFit="cover"
        source={require("../assets/group2.png")}
      />
      <Image
        style={styles.burger1Icon}
        contentFit="cover"
        source={require("../assets/burger-11.png")}
      />
      <Image
        style={[styles.iconlylightprofile, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Image
        style={[styles.iconlyboldhome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.iconlyboldscan, styles.groupIcon1Layout]}
        contentFit="cover"
        source={require("../assets/iconlyboldscan.png")}
      />
      <Image
        style={[styles.iconlylightprofile, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Image
        style={[styles.iconlyboldhome, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <Image
        style={[styles.iconlyboldscan, styles.groupIcon1Layout]}
        contentFit="cover"
        source={require("../assets/iconlyboldscan.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  favoritesFoodLayout: {
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  statusPosition: {
    left: "0%",
    width: "100%",
  },
  borderPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    position: "absolute",
  },
  iconLayout: {
    bottom: "22.86%",
    top: "54.29%",
    height: "22.86%",
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    display: "none",
    position: "absolute",
    overflow: "hidden",
  },
  favoritesLayout: {
    height: 90,
    width: 94,
    borderRadius: Border.br_base,
    left: 37,
    position: "absolute",
  },
  favoritesBg: {
    backgroundColor: Color.colorOldlace,
    top: 211,
  },
  rectangleViewLayout: {
    width: 93,
    left: 147,
    height: 90,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  favoritesChildLayout: {
    left: 255,
    height: 90,
    width: 94,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "2.27%",
    height: "3.03%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    top: "14.78%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    left: "75.81%",
    bottom: "78.73%",
    top: "15.6%",
    height: "5.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    bottom: "64.79%",
    top: "27.78%",
    height: "7.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupIcon1Layout: {
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    width: 134,
    height: 5,
  },
  modelight: {
    top: 778,
    left: 0,
    width: 375,
    height: 34,
    display: "none",
    position: "absolute",
  },
  statusBarChild: {
    right: "0%",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlack,
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
  },
  capacity: {
    height: "64.6%",
    width: "74.07%",
    top: "17.7%",
    right: "17.7%",
    bottom: "17.7%",
    left: "8.23%",
    borderRadius: 1,
  },
  battery: {
    height: "25.68%",
    width: "6.48%",
    top: "39.32%",
    right: "3.84%",
    bottom: "35%",
    left: "89.68%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    top: "50%",
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    color: Color.bordersBackgroundsBlack,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    left: "0%",
    width: "100%",
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "15.91%",
    right: "80%",
    bottom: "36.36%",
    left: "5.6%",
    position: "absolute",
  },
  barsStatusBarIphoneL: {
    height: "41.9%",
    bottom: "58.1%",
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  dailyPractice: {
    top: "58.1%",
    left: "42.13%",
    fontSize: FontSize.headingHeading5_size,
    letterSpacing: 0.6,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.typographyHeadingMain,
    display: "none",
  },
  component1Icon: {
    right: "87.2%",
    left: "6.4%",
  },
  component2Icon: {
    right: "8%",
    left: "85.6%",
  },
  statusBar: {
    height: "12.93%",
    bottom: "87.07%",
    right: "0%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  groupIcon: {
    height: "2.34%",
    width: "2.88%",
    top: "6.03%",
    right: "92.05%",
    bottom: "91.63%",
    left: "5.07%",
  },
  foodDiary: {
    top: 44,
    left: 155,
    letterSpacing: 0.8,
    fontFamily: FontFamily.signika,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  favoritesFoodChild: {
    backgroundColor: Color.colorFloralwhite,
    top: 105,
  },
  favoritesFoodItem: {
    height: 90,
    width: 94,
    borderRadius: Border.br_base,
    left: 37,
    position: "absolute",
  },
  favoritesFoodInner: {
    backgroundColor: Color.colorFloralwhite,
    top: 105,
  },
  rectangleView: {
    backgroundColor: Color.colorOldlace,
    top: 211,
  },
  favoritesFoodChild1: {
    backgroundColor: Color.colorFloralwhite,
    top: 105,
  },
  favoritesFoodChild2: {
    backgroundColor: Color.colorOldlace,
    top: 211,
  },
  favoritesFoodChild3: {
    width: "16.51%",
    top: "14.79%",
    right: "69.47%",
    bottom: "77.78%",
    left: "14.03%",
    height: "7.43%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    top: "18.1%",
    right: "14.8%",
    bottom: "78.87%",
    left: "82.93%",
  },
  vectorIcon1: {
    top: "17.81%",
    right: "22.56%",
    bottom: "79.16%",
    left: "75.17%",
  },
  vectorIcon2: {
    height: "7.39%",
    width: "14.21%",
    right: "12.35%",
    bottom: "77.83%",
    left: "73.44%",
  },
  vectorIcon3: {
    height: "6.97%",
    width: "12.69%",
    right: "12.37%",
    bottom: "78.25%",
    left: "74.93%",
  },
  vectorIcon4: {
    width: "10.35%",
    right: "13.84%",
  },
  vectorIcon5: {
    width: "8.27%",
    right: "15.92%",
  },
  vectorIcon6: {
    height: "2.32%",
    width: "7.44%",
    top: "16.8%",
    right: "15.44%",
    bottom: "80.89%",
    left: "77.12%",
  },
  page1Icon: {
    width: "16.69%",
    right: "69.28%",
    left: "14.03%",
  },
  xmlid1691Icon: {
    width: "14.61%",
    right: "41.09%",
    left: "44.29%",
  },
  groupIcon1: {
    height: "2.8%",
    top: "30.14%",
    right: "16.27%",
    bottom: "67.07%",
    left: "77.33%",
  },
  burger1Icon: {
    top: 117,
    left: 161,
    width: 65,
    height: 59,
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightprofile: {
    height: "3.94%",
    width: "8.53%",
    top: "91.63%",
    right: "5.07%",
    bottom: "4.43%",
    left: "86.4%",
  },
  iconlyboldhome: {
    height: "4.43%",
    width: "9.6%",
    top: "91.87%",
    right: "85.6%",
    bottom: "3.69%",
    left: "4.8%",
  },
  iconlyboldscan: {
    height: "2.96%",
    top: "92.24%",
    right: "46.4%",
    bottom: "4.8%",
    left: "47.2%",
  },
  favoritesFood: {
    flex: 1,
    height: 812,
    overflow: "hidden",
  },
});

export default FavoritesFood1;
