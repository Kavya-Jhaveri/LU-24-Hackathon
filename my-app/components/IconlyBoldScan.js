import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconlyBoldScan = () => {
  return (
    <View style={styles.iconlyboldscan}>
      <Image
        style={styles.scanIcon}
        contentFit="cover"
        source={require("../assets/scan.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scanIcon: {
    position: "absolute",
    height: "200%",
    width: "200%",
    top: "-50%",
    right: "-50%",
    bottom: "-50%",
    left: "-50%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlyboldscan: {
    width: 24,
    height: 24,
  },
});

export default IconlyBoldScan;
