import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

const IconlyLightProfile = () => {
  return (
    <View style={styles.iconlylightprofile}>
      <Image
        style={styles.profileIcon}
        contentFit="cover"
        source={require("../assets/profile.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileIcon: {
    position: "absolute",
    height: "76.56%",
    width: "59.69%",
    top: "11.88%",
    right: "20.31%",
    bottom: "11.56%",
    left: "20%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  iconlylightprofile: {
    width: 32,
    height: 32,
  },
});

export default IconlyLightProfile;
