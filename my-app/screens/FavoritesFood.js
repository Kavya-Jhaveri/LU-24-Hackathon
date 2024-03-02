import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const FavoritesFood = () => {
  return (
    <View style={styles.favoritesFood}>
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
      <Text
        style={[styles.updateFoodDiary, styles.insertPhotoTypo]}
      >{`Update Food Diary
`}</Text>
      <Image
        style={styles.favoritesFoodChild}
        contentFit="cover"
        source={require("../assets/ellipse-10.png")}
      />
      <Text style={[styles.insertPhoto, styles.insertPhotoTypo]}>{`INSERT PHOTO
`}</Text>
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
        style={styles.iconlyboldscan}
        contentFit="cover"
        source={require("../assets/iconlyboldscan.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  statusPosition: {
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
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
  insertPhotoTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.signika,
    letterSpacing: 0.8,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
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
    height: "100%",
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
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
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
  },
  dailyPractice: {
    top: "58.1%",
    left: "38.13%",
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
  },
  groupIcon: {
    height: "2.34%",
    width: "2.88%",
    top: "6.53%",
    right: "92.85%",
    bottom: "91.13%",
    left: "4.27%",
  },
  updateFoodDiary: {
    top: 44,
    left: 122,
  },
  favoritesFoodChild: {
    top: 125,
    left: 110,
    width: 160,
    height: 160,
    position: "absolute",
  },
  insertPhoto: {
    top: 305,
    left: 135,
  },
  iconlylightprofile: {
    height: "3.94%",
    width: "8.53%",
    top: "90.76%",
    right: "5.07%",
    bottom: "5.3%",
    left: "86.4%",
  },
  iconlyboldhome: {
    height: "4.43%",
    width: "9.6%",
    top: "90.64%",
    right: "85.6%",
    bottom: "4.93%",
    left: "4.8%",
  },
  iconlyboldscan: {
    height: "2.96%",
    top: "91.01%",
    right: "46.4%",
    bottom: "6.03%",
    left: "47.2%",
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  favoritesFood: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default FavoritesFood;
