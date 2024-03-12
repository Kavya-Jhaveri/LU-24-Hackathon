import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, Border, FontFamily } from "../GlobalStyles";

const Onboarding2 = () => {
  return (
    <View style={styles.onboarding03}>
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <View style={styles.appbartop}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.framePosition]}
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
            <Text style={[styles.time, styles.timeFlexBox]}>9:41</Text>
          </View>
        </View>
        <View style={[styles.getStartedWrapper, styles.frameFlexBox]}>
          <Text style={styles.getStarted}>Get Started</Text>
        </View>
      </View>
      <View style={[styles.frame1, styles.frame1Layout]}>
        <Image
          style={[styles.mobileCuate1Icon, styles.frame1Layout]}
          contentFit="cover"
          source={require("../assets/mobilecuate-1.png")}
        />
        <Text
          style={[styles.withAmazingInbuilt, styles.withAmazingInbuiltTypo]}
        >
          With amazing inbuilt tools you can track your progress.
        </Text>
        <Text
          style={[styles.alreadyHaveAnContainer, styles.withAmazingInbuiltTypo]}
        >
          <Text style={styles.alreadyHaveAnAcount}>
            <Text style={styles.alreadyHaveAn}>Already Have An Acount?</Text>
            <Text style={styles.text}>{` `}</Text>
          </Text>
          <Text style={styles.text}>
            <Text style={styles.logIn1}>Log In</Text>
          </Text>
        </Text>
        <Text style={[styles.trackYourHealth, styles.timeFlexBox]}>
          Track Your Health
        </Text>
        <View style={styles.rectangleParent}>
          <View style={[styles.frameChild, styles.frameLayout]} />
          <View style={[styles.frameItem, styles.frameSpaceBlock]} />
          <View style={[styles.frameInner, styles.frameSpaceBlock]} />
        </View>
        <Text style={[styles.uninutrion, styles.timeFlexBox]}>{`UNITRITION
`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  framePosition: {
    overflow: "hidden",
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  frame1Layout: {
    width: 282,
    overflow: "hidden",
    position: "absolute",
  },
  withAmazingInbuiltTypo: {
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  frameLayout: {
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
  },
  frameSpaceBlock: {
    marginLeft: 4,
    borderRadius: Border.br_base,
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
    height: 34,
    display: "none",
    width: 375,
    left: 0,
    position: "absolute",
  },
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlack,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
    position: "absolute",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    right: "0%",
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
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
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.bordersBackgroundsBlack,
    fontWeight: "600",
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
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
  appbartop: {
    height: 44,
    width: 375,
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  getStarted: {
    letterSpacing: 1.3,
    color: Color.bordersBackgroundsWhiteBackground,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
  },
  getStartedWrapper: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorDarkseagreen,
    width: 290,
    height: 72,
    marginTop: 595,
  },
  frame: {
    height: 711,
    overflow: "hidden",
    position: "absolute",
    top: 0,
    width: 375,
    left: 0,
  },
  mobileCuate1Icon: {
    top: 108,
    height: 282,
    left: 0,
  },
  withAmazingInbuilt: {
    top: 457,
    left: 4,
    lineHeight: 24,
    color: Color.colorGray_500,
    width: 272,
    fontFamily: FontFamily.signika,
    textAlign: "center",
    letterSpacing: 0,
  },
  alreadyHaveAn: {
    color: Color.colorGray_200,
  },
  text: {
    color: Color.colorDarkseagreen,
  },
  alreadyHaveAnAcount: {
    fontFamily: FontFamily.signika,
  },
  logIn1: {
    fontFamily: FontFamily.signika,
    fontWeight: "600",
  },
  alreadyHaveAnContainer: {
    top: 657,
    left: 26,
    textAlign: "left",
  },
  trackYourHealth: {
    top: 414,
    left: 48,
    lineHeight: 35,
    color: Color.colorGray_400,
    fontFamily: FontFamily.signika,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_base,
    width: 12,
    backgroundColor: Color.colorPink,
  },
  frameItem: {
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
  },
  frameInner: {
    backgroundColor: Color.colorSalmon_100,
    width: 20,
    height: 10,
  },
  rectangleParent: {
    top: 517,
    left: 115,
    width: 52,
    flexDirection: "row",
    height: 10,
    alignItems: "center",
    position: "absolute",
  },
  uninutrion: {
    left: 66,
    fontWeight: "800",
    fontFamily: FontFamily.nunito,
    color: Color.colorBeige_100,
    width: 147,
    height: 21,
    fontSize: FontSize.size_6xl,
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
    top: 0,
  },
  frame1: {
    top: 70,
    left: 47,
    height: 678,
  },
  onboarding03: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default Onboarding2;
