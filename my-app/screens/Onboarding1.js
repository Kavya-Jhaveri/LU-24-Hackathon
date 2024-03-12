import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Onboarding1 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboarding01, styles.appbartopBg]}>
      <Pressable
        style={styles.onboarding01Child}
        onPress={() => navigation.navigate("CreateAccount")}
      />
      <Text style={[styles.getStarted, styles.getStartedFlexBox]}>
        Get Started
      </Text>
      <Text style={[styles.alreadyHaveAnContainer, styles.getStartedFlexBox]}>
        <Text style={styles.alreadyHaveAnAcount}>
          <Text style={styles.alreadyHaveAn}>Already Have An Acount?</Text>
          <Text style={styles.text}>{` `}</Text>
        </Text>
        <Text style={styles.text}>
          <Text style={styles.logIn1}>Log In</Text>
        </Text>
      </Text>
      <Image
        style={styles.eatingHealthyFoodCuate1}
        contentFit="cover"
        source={require("../assets/eating-healthy-foodcuate-1.png")}
      />
      <Text style={[styles.eatHealthy, styles.eatHealthyTypo]}>
        Eat Healthy
      </Text>
      <Text style={[styles.joinUnitritionTo, styles.eatHealthyTypo]}>
        Join UNITRITION to eat healthier based on your customized data
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
      <View style={styles.onboarding01Item} />
      <View style={[styles.onboarding01Inner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Text style={[styles.uninutrion, styles.timeLayout]}>UNITRITION</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appbartopBg: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    width: "100%",
  },
  getStartedFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  eatHealthyTypo: {
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
  rectangleViewLayout: {
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
    top: 588,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  onboarding01Child: {
    top: 639,
    left: 42,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.colorDarkseagreen,
    width: 290,
    height: 72,
    position: "absolute",
  },
  getStarted: {
    top: 660,
    left: 119,
    letterSpacing: 1.3,
    color: Color.bordersBackgroundsWhiteBackground,
    fontFamily: FontFamily.signika,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
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
    top: 727,
    left: 73,
    fontSize: FontSize.size_mid,
  },
  eatingHealthyFoodCuate1: {
    top: 178,
    left: 47,
    width: 281,
    height: 282,
    position: "absolute",
    overflow: "hidden",
  },
  eatHealthy: {
    top: 484,
    left: 126,
    lineHeight: 35,
    color: Color.colorGray_400,
    fontWeight: "600",
    fontSize: FontSize.size_6xl,
  },
  joinUnitritionTo: {
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
  onboarding01Item: {
    top: 587,
    left: 161,
    backgroundColor: Color.colorSalmon_100,
    width: 20,
    height: 10,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  onboarding01Inner: {
    left: 185,
  },
  rectangleView: {
    left: 201,
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
  onboarding01: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Onboarding1;
