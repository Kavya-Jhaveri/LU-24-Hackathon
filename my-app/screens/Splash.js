import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Splash = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.splash}
      onPress={() => navigation.navigate("Onboarding1")}
    >
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.appbartop, styles.borderPosition]}>
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap1.png")}
          />
          <View style={[styles.capacity, styles.capacityBg]} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi1.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection1.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={styles.time}>9:41</Text>
        </View>
      </View>
      <Text style={[styles.monsterX, styles.monsterXTypo]}>MONSTER X</Text>
      <Text style={[styles.unitrition, styles.monsterXTypo]}>UNITRITION</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    position: "absolute",
  },
  borderPosition: {
    left: "0%",
    position: "absolute",
  },
  monsterXTypo: {
    fontFamily: FontFamily.nunito,
    fontWeight: "800",
    fontSize: FontSize.size_6xl,
    left: 114,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
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
  border: {
    height: "100%",
    width: "90.53%",
    top: "0%",
    right: "9.47%",
    bottom: "0%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsWhiteBackground,
    borderWidth: 1,
    opacity: 0.35,
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
    right: "0%",
    position: "absolute",
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
    fontWeight: "600",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.bordersBackgroundsWhiteBackground,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    left: "0%",
    position: "absolute",
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
    top: "0.99%",
    bottom: "93.6%",
    backgroundColor: Color.colorDarkseagreen,
    right: "0%",
    width: "100%",
  },
  monsterX: {
    top: 697,
    color: Color.colorBeige_100,
  },
  unitrition: {
    top: 352,
    color: "#e6e7cb",
  },
  splash: {
    backgroundColor: "#132c0e",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Splash;
