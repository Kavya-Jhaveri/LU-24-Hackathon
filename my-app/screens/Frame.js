import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const Frame = () => {
  return (
    <View style={styles.frame}>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconPosition5]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={styles.vectorIcon3}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon4, styles.vectorIconPosition4]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconPosition4]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition3]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vectorIcon8, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.vectorIcon9, styles.vectorIconPosition2]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        style={[styles.vectorIcon10, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector10.png")}
      />
      <Image
        style={[styles.vectorIcon11, styles.vectorIconPosition1]}
        contentFit="cover"
        source={require("../assets/vector11.png")}
      />
      <Image
        style={[styles.vectorIcon12, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector12.png")}
      />
      <Image
        style={[styles.vectorIcon13, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector13.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition5: {
    left: "0%",
    width: "100%",
  },
  vectorIconPosition4: {
    right: "22.22%",
    top: "49.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition3: {
    top: "45.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition2: {
    right: "3.65%",
    top: "35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition1: {
    right: "41.11%",
    top: "28.33%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconPosition: {
    top: "4.17%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "13%",
    width: "88.73%",
    right: "5.71%",
    bottom: "34.67%",
    left: "5.56%",
    top: "52.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon1: {
    height: "7.67%",
    width: "87.62%",
    right: "6.19%",
    left: "6.19%",
    bottom: "40%",
    top: "52.33%",
    maxWidth: "100%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "31.33%",
    bottom: "4.17%",
    right: "0%",
    left: "0%",
    top: "64.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon3: {
    height: "23%",
    width: "98.73%",
    right: "0.63%",
    bottom: "12.5%",
    left: "0.63%",
    top: "64.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon4: {
    height: "19.67%",
    width: "46.83%",
    bottom: "30.67%",
    left: "30.95%",
  },
  vectorIcon5: {
    height: "18%",
    width: "37.62%",
    bottom: "32.33%",
    left: "40.16%",
  },
  vectorIcon6: {
    height: "14.5%",
    width: "96.19%",
    right: "1.9%",
    left: "1.9%",
    bottom: "40%",
  },
  vectorIcon7: {
    height: "9.83%",
    width: "95.56%",
    right: "2.22%",
    bottom: "44.67%",
    left: "2.22%",
  },
  vectorIcon8: {
    height: "44.67%",
    width: "92.7%",
    bottom: "20.33%",
    left: "3.65%",
  },
  vectorIcon9: {
    height: "39.83%",
    width: "85.4%",
    bottom: "25.17%",
    left: "10.95%",
  },
  vectorIcon10: {
    height: "18.33%",
    width: "47.3%",
    bottom: "53.33%",
    left: "11.59%",
  },
  vectorIcon11: {
    height: "17.67%",
    width: "39.05%",
    bottom: "54%",
    left: "19.84%",
  },
  vectorIcon12: {
    height: "31.5%",
    bottom: "64.33%",
    left: "0%",
    width: "100%",
  },
  vectorIcon13: {
    height: "26.5%",
    width: "89.05%",
    bottom: "69.33%",
    left: "10.95%",
  },
  groupIcon: {
    height: "17.17%",
    width: "54.76%",
    top: "10.83%",
    right: "22.38%",
    bottom: "72%",
    left: "22.86%",
    maxWidth: "100%",
    position: "absolute",
  },
  frame: {
    flex: 1,
    height: 60,
    overflow: "hidden",
    width: "100%",
  },
});

export default Frame;
