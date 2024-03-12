import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconlyBoldHome = () => {
  return (
    <View style={styles.iconlyboldhome}>
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homeIcon: {
    position: "absolute",
    height: "83.33%",
    width: "79.17%",
    top: "8.33%",
    right: "10.28%",
    bottom: "8.33%",
    left: "10.56%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyboldhome: {
    width: 36,
    height: 36,
  },
});

export default IconlyBoldHome;
