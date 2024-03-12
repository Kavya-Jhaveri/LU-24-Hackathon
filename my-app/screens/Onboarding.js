import * as React from "react";
import { StyleSheet, View, Pressable, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.onboarding02, styles.appbartopBg]}
      onPress={() => navigation.navigate("Onboarding2")}
    >
      <Text style={styles.alreadyHaveAnContainer}>
        <Text style={styles.alreadyHaveAnAcount}>
          <Text style={styles.alreadyHaveAn}>Already Have An Acount?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.logIn1}>Log In</Text>
        </Text>
      </Text>
      <Text style={[styles.weightControl, styles.weightControlTypo]}>
        Weight Control
      </Text>
      <Text style={[styles.helpToAchieve, styles.weightControlTypo]}>
        Help to achieve your target weight by out own formula
      </Text>
      <View style={[styles.appbartop, styles.capIconPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={[styles.capIcon, styles.capIconPosition]}
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
          <Text style={[styles.time, styles.timeLayout]}>9:41</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.frameFlexBox]}>
        <View style={[styles.frameChild, styles.frameLayout]} />
        <View style={[styles.frameItem, styles.frameSpaceBlock]} />
        <View style={[styles.frameInner, styles.frameSpaceBlock]} />
      </View>
      <Image
        style={styles.cookingCuate1Icon}
        contentFit="cover"
        source={require("../assets/cookingcuate-1.png")}
      />
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.uninutrion, styles.timeLayout]}>UNITRITION</Text>
      <View style={[styles.frame, styles.frameFlexBox]}>
        <Pressable
          style={styles.rectanglePressable}
          onPress={() => navigation.navigate("CreateAccount")}
        />

<TouchableOpacity
    style={styles.getStartedFlexBox}
    onPress={() => {
      navigation.navigate('CreateAccount')
    }}
  >
    <Text style={styles.getStarted}>Get Started</Text>
  </TouchableOpacity>
        
      
      
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  appbartopBg: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    width: "100%",
  },
  weightControlTypo: {
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.signika,
    position: "absolute",
  },
  capIconPosition: {
    right: "0%",
    position: "absolute",
  },
  borderPosition: {
    top: "0%",
    left: "0%",
  },
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  timeLayout: {
    lineHeight: 20,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  frameFlexBox: {
    alignItems: "center",
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
    fontWeight: "600",
    fontFamily: FontFamily.signika,
  },
  alreadyHaveAnContainer: {
    top: 727,
    left: 73,
    textAlign: "left",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  weightControl: {
    top: 484,
    left: 107,
    lineHeight: 35,
    color: Color.colorGray_400,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
  },
  helpToAchieve: {
    top: 527,
    left: 51,
    lineHeight: 24,
    color: Color.colorGray_500,
    width: 272,
    fontSize: FontSize.size_mid,
  },
  border: {
    height: "100%",
    width: "90.53%",
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
    bottom: "31.86%",
    left: "94.65%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0.4,
    overflow: "hidden",
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
    left: "0%",
    fontWeight: "600",
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
    height: "5.42%",
    bottom: "94.58%",
    left: "0%",
    top: "0%",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  frameChild: {
    borderRadius: Border.br_base,
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
  },
  frameItem: {
    backgroundColor: Color.colorSalmon_100,
    width: 20,
    height: 10,
  },
  frameInner: {
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
  },
  rectangleParent: {
    top: 587,
    left: 162,
    width: 52,
    flexDirection: "row",
    height: 10,
  },
  cookingCuate1Icon: {
    top: 178,
    left: 47,
    width: 282,
    height: 282,
    overflow: "hidden",
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
  uninutrion: {
    top: 74,
    left: 114,
    fontWeight: "800",
    fontFamily: FontFamily.nunito,
    color: Color.colorBeige_100,
    fontSize: FontSize.size_6xl,
  },
  rectanglePressable: {
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorDarkseagreen,
    height: 72,
    width: 290,
  },
  getStarted: {
    letterSpacing: 1.3,
    color: Color.bordersBackgroundsWhiteBackground,
    marginTop: -51,
    fontSize: FontSize.size_6xl,
    fontWeight: "600",
    fontFamily: FontFamily.signika,
    textAlign: "left",
  },
  frame: {
    top: 639,
    left: 42,
    justifyContent: "flex-end",
    width: 290,
    overflow: "hidden",
  },
  onboarding02: {
    flex: 1,
    height: 812,
    width: "100%",
  },
});

export default Onboarding;
