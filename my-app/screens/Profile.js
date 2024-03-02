import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile}>
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.statusBar, styles.statusPosition]}>
        <View style={styles.statusBarChild} />
        <View style={[styles.barsStatusBarIphoneL, styles.statusPosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
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
        <Text style={[styles.dailyPractice, styles.timeTypo]}>Profile</Text>
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
      <View style={styles.barsStatusBarIphoneL1}>
        <View style={styles.battery}>
          <View style={styles.border} />
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
      <Image
        style={styles.profileChild}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={styles.profileItem}
        contentFit="cover"
        source={require("../assets/ellipse-9.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/group3.png")}
      />
      <Text style={styles.editName}>Edit Name</Text>
      <View style={[styles.profileInner, styles.profileChildLayout]} />
      <View style={[styles.rectangleView, styles.profileChildLayout]} />
      <View style={[styles.profileChild1, styles.profileChildLayout]} />
      <Image
        style={[styles.iconlyboldprofile, styles.iconlyboldpaperLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldprofile1.png")}
      />
      <View style={[styles.profileChild2, styles.profileChildLayout]} />
      <Image
        style={[styles.iconlyboldsetting, styles.iconlyboldpaperLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldsetting.png")}
      />
      <Image
        style={[styles.iconlyboldpaper, styles.iconlyboldpaperLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldpaper.png")}
      />
      <Image
        style={[styles.iconlyboldlogout, styles.iconlyboldpaperLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldlogout.png")}
      />
      <Text style={[styles.editProfile, styles.logOutTypo]}>Edit Profile</Text>
      <Text style={[styles.settings, styles.logOutTypo]}>Settings</Text>
      <Text
        style={[styles.termsPrivacy, styles.logOutTypo]}
      >{`Terms & Privacy Policy`}</Text>
      <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
      <Image
        style={[styles.iconlylightarrowRight2, styles.iconlylightarrowPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight4, styles.iconlylightarrowPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight5, styles.iconlylightarrowPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <Image
        style={[styles.iconlylightarrowRight6, styles.iconlylightarrowPosition]}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--right-21.png")}
      />
      <View style={styles.lineView} />
      <Image
        style={[styles.iconlylightprofile, styles.iconlylightprofileLayout]}
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
      <Image
        style={[styles.iconlylightprofile1, styles.iconlylightprofileLayout]}
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
    width: "100%",
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
  profileChildLayout: {
    height: 48,
    width: 48,
    backgroundColor: Color.colorFloralwhite,
    borderRadius: Border.br_5xs,
    left: 32,
    position: "absolute",
  },
  iconlyboldpaperLayout: {
    left: "11.2%",
    right: "81.33%",
    width: "7.47%",
    height: "3.45%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  logOutTypo: {
    color: Color.colorDimgray_100,
    letterSpacing: 0.9,
    fontSize: FontSize.size_mid,
    left: 96,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    position: "absolute",
  },
  iconlylightarrowPosition: {
    left: 319,
    height: 24,
    width: 24,
    position: "absolute",
  },
  iconlylightprofileLayout: {
    left: "86.67%",
    right: "4.8%",
    width: "8.53%",
    height: "3.94%",
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
    width: 375,
    height: 34,
    display: "none",
    left: 0,
    position: "absolute",
  },
  statusBarChild: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderColor: Color.bordersBackgroundsBlack,
    borderWidth: 1,
    opacity: 0.35,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
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
    fontSize: FontSize.sFSubheadlineSemibold_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    color: Color.bordersBackgroundsBlack,
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
    left: "44.27%",
    fontSize: FontSize.headingHeading5_size,
    letterSpacing: 0.6,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.typographyHeadingMain,
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
  barsStatusBarIphoneL1: {
    top: 0,
    right: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
  profileChild: {
    top: 113,
    left: 108,
    width: 160,
    height: 160,
    position: "absolute",
  },
  profileItem: {
    top: 246,
    left: 224,
    height: 24,
    width: 24,
    position: "absolute",
  },
  groupIcon: {
    height: "0.99%",
    width: "3.2%",
    top: "31.28%",
    right: "35.47%",
    bottom: "67.73%",
    left: "61.33%",
  },
  editName: {
    top: 296,
    left: 126,
    fontSize: FontSize.size_6xl,
    letterSpacing: 1.3,
    color: Color.colorGray_300,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    position: "absolute",
  },
  profileInner: {
    top: 520,
  },
  rectangleView: {
    top: 584,
  },
  profileChild1: {
    top: 376,
  },
  iconlyboldprofile: {
    top: "47.54%",
    bottom: "49.01%",
  },
  profileChild2: {
    top: 440,
  },
  iconlyboldsetting: {
    top: "55.42%",
    bottom: "41.13%",
  },
  iconlyboldpaper: {
    top: "65.27%",
    bottom: "31.28%",
  },
  iconlyboldlogout: {
    top: "73.15%",
    bottom: "23.4%",
  },
  editProfile: {
    top: 389,
  },
  settings: {
    top: 453,
  },
  termsPrivacy: {
    top: 533,
  },
  logOut: {
    top: 597,
  },
  iconlylightarrowRight2: {
    top: 388,
  },
  iconlylightarrowRight4: {
    top: 452,
  },
  iconlylightarrowRight5: {
    top: 532,
  },
  iconlylightarrowRight6: {
    top: 596,
  },
  lineView: {
    top: 504,
    borderColor: "#f7f7f7",
    borderTopWidth: 1,
    width: 312,
    height: 1,
    left: 32,
    borderStyle: "solid",
    position: "absolute",
  },
  iconlylightprofile: {
    top: "91.26%",
    bottom: "4.8%",
  },
  iconlyboldhome: {
    height: "4.43%",
    width: "9.6%",
    top: "91.5%",
    right: "85.33%",
    bottom: "4.06%",
    left: "5.07%",
  },
  iconlyboldscan: {
    height: "2.96%",
    top: "91.87%",
    right: "46.13%",
    bottom: "5.17%",
    left: "47.47%",
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightprofile1: {
    top: "91.75%",
    bottom: "4.31%",
  },
  profile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default Profile;
