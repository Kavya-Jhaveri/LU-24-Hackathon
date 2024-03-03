import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation();
  const handleViewNowPress = () => {
    navigation.navigate('SearchNoResults');
  };
  
  return (
    <View style={styles.home}>
      <View style={[styles.appbartop, styles.timePosition]}>
      </View>
      <Image
        style={[styles.iconlylightprofile, styles.capIconLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Image
        style={[styles.iconlyboldhome, styles.capIconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldhome.png")}
      />
      <View style={[styles.rectangleParent, styles.rectangleParentPosition]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildPosition1]}
          locations={[0, 1]}
          colors={["rgba(255, 242, 240, 0.5)", "#fff8eb"]}
        />
        <Image
          style={[styles.groupItem, styles.capIconLayout]}
          contentFit="cover"
          source={require("../assets/group-1.png")}
        />
        <View style={styles.weeklyMealSuggestedForYouWrapper}>
          <Text
            style={[styles.weeklyMealSuggested, styles.numberTypo]}
          >{`Weekly Meal Suggested for you `}</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectanglePosition]}>
          <View style={styles.groupInner} />
          <View style={styles.todayMealWrapper}>
            <Text
              style={[styles.todayMeal, styles.mealClr]}
            >{`Today meal: `}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.bmiLayout]}>
        <View style={styles.rectangleView} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
        <View style={[styles.groupChild2, styles.groupChildLayout]} />
      </View>
      <Text style={[styles.helloSullivanFindContainer, styles.bmiFlexBox]}>
        <Text style={styles.helloSullivan}>{`Hello Sullivan,
`}</Text>
        <Text style={[styles.findTrackAnd, styles.findTrackAndTypo]}>
          Find, track and eat healthy food.
        </Text>
      </Text>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupChild3, styles.groupLayout]} />
        <Image
          style={styles.subtractIcon}
          contentFit="cover"
          source={require("../assets/subtract.png")}
        />
        <Text style={[styles.weeklyMealSuggested1, styles.findTrackAndTypo]}>
          Weekly Meal suggested for you
        </Text>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild4, styles.groupChildPosition]} />
          <View style={styles.viewNowParent}>
          <TouchableOpacity onPress={handleViewNowPress}>
  <Text style={[styles.viewNow, styles.viewNowTypo]}>View Now</Text>
</TouchableOpacity>
            <Image
              style={[styles.iconlyboldarrowRight2, styles.capIconLayout]}
              contentFit="cover"
              source={require("../assets/iconlyboldarrow--right-22.png")}
            />
          </View>
        </View>
      </View>
      <Text style={[styles.bmi, styles.bmiLayout]}>CUSTOMIZED BMI</Text>
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <Image
        style={[styles.iconlyboldscan, styles.capIconLayout]}
        contentFit="cover"
        source={require("../assets/iconlyboldscan.png")}
      />
      <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
        <LinearGradient
          style={[styles.rectangleLineargradient, styles.groupChildPosition1]}
          locations={[0, 1]}
          colors={["rgba(255, 242, 240, 0.5)", "#fff8eb"]}
        />
        <View style={styles.bmiInformationWrapper}>
          <Text style={[styles.bmiInformation, styles.numberTypo]}>
            BMI Information
          </Text>
        </View>
        <View style={[styles.rectangleWrapper, styles.rectanglePosition]}>
          <View style={[styles.groupChild5, styles.groupChildPosition]} />
        </View>
      </View>
      <Text style={[styles.number, styles.numberTypo]}>NUMBER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
  capIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  bmiFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  rectangleParentPosition: {
    left: "5.87%",
    height: "23.65%",
    position: "absolute",
  },
  groupChildPosition1: {
    backgroundColor: "transparent",
    borderRadius: Border.br_13xl,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    position: "absolute",
  },
  numberTypo: {
    lineHeight: 14,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    fontWeight: "600",
    letterSpacing: 0,
    position: "absolute",
  },
  rectanglePosition: {
    bottom: "7.14%",
    top: "17.14%",
    height: "75.73%",
    position: "absolute",
  },
  mealClr: {
    color: Color.bordersBackgroundsWhiteBackground,
    fontWeight: "600",
    position: "absolute",
  },

  groupChildLayout: {
    height: 8,
    width: 12,
    backgroundColor: Color.colorPink,
    top: 1,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  findTrackAndTypo: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.signika,
  },
  groupLayout: {
    width: 320,
    height: 88,
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  viewNowTypo: {
    fontSize: FontSize.headingHeading5_size,
    fontFamily: FontFamily.signika,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    top: "0%",
    left: "0%",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlack,
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
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



  appbartop: {
    height: "5.42%",
    top: "0.99%",
    bottom: "93.6%",
    right: "0%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  iconlylightprofile: {
    height: "3.94%",
    width: "8.53%",
    top: "91.63%",
    right: "6.13%",
    bottom: "4.43%",
    left: "85.33%",
  },
  iconlyboldhome: {
    height: "4.43%",
    width: "9.6%",
    top: "91.38%",
    right: "86.67%",
    bottom: "4.19%",
    left: "3.73%",
  },
  groupChild: {
    width: "99.88%",
    right: "0.12%",
  },
  groupItem: {
    height: "71.46%",
    width: "34.78%",
    top: "9.48%",
    bottom: "19.06%",
    left: "65.22%",
    right: "0%",
  },
  weeklyMealSuggested: {
    color: "#ff806e",
    textAlign: "left",
    fontFamily: FontFamily.signika,
    top: "0%",
    fontSize: FontSize.size_3xs,
    height: "100%",
    left: "0%",
    width: "200%",
  },
  weeklyMealSuggestedForYouWrapper: {
    height: "8.28%",
    width: "39.95%",
    top: "8.28%",
    right: "50.36%",
    bottom: "83.44%",
    left: "9.69%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorSalmon_100,
    borderRadius: Border.br_5xs,
    bottom: "0%",
    top: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  todayMeal: {
    fontSize: FontSize.headingHeading5_size,
    fontFamily: FontFamily.signika,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    top: "0%",
    left: "0%",
    height: "100%",
    color: Color.bordersBackgroundsWhiteBackground,
    width: "100%",
  },
  todayMealWrapper: {
    height: "19.26%",
    width: "40.68%",
    top: "8.67%",
    right: "55.88%",
    bottom: "72.08%",
    left: "3.44%",
    position: "absolute",
  },
  rectangleGroup: {
    width: "52.44%",
    right: "40.37%",
    left: "7.19%",
  },
  rectangleParent: {
    width: "88.64%",
    top: "18.47%",
    right: "5.49%",
    bottom: "57.88%",
  },
  rectangleView: {
    width: 20,
    borderRadius: Border.br_base,
    left: 0,
    top: 0,
    height: 10,
    backgroundColor: Color.colorSalmon_100,
    position: "absolute",
  },
  groupChild1: {
    left: 24,
  },
  groupChild2: {
    left: 40,
  },
  rectangleContainer: {
    top: 332,
    left: 161,
    width: 52,
  },
  helloSullivan: {
    fontSize: FontSize.size_6xl,
    color: Color.colorDarkseagreen,
    fontFamily: FontFamily.signika,
    fontWeight: "600",
  },
  findTrackAnd: {
    color: "#7b7b7b",
  },
  helloSullivanFindContainer: {
    top: 72,
    left: 70,
    lineHeight: 28,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild3: {
    borderRadius: Border.br_5xl,
    backgroundColor: "#a3a0ca",
    height: 88,
    left: 0,
    top: 0,
    width: 320,
  },
  subtractIcon: {
    width: 232,
    height: 88,
  },
  weeklyMealSuggested1: {
    top: 19,
    lineHeight: 25,
    width: 150,
    left: 28,
    color: Color.bordersBackgroundsWhiteBackground,
    fontWeight: "400",
    position: "absolute",
    textAlign: "left",
  },
  groupChild4: {
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  viewNow: {
    color: "#9e9bc7",
    fontWeight: "600",
    position: "absolute",
  },
  iconlyboldarrowRight2: {
    height: "60%",
    width: "18.18%",
    top: "20%",
    bottom: "20%",
    left: "81.82%",
    right: "0%",
  },
  viewNowParent: {
    height: "62.5%",
    width: "67.35%",
    top: "18.75%",
    right: "16.33%",
    bottom: "18.75%",
    left: "16.33%",
    position: "absolute",
  },
  rectangleParent1: {
    height: "36.36%",
    width: "30.63%",
    top: "31.82%",
    right: "10%",
    bottom: "31.82%",
    left: "59.38%",
    position: "absolute",
  },
  groupView: {
    top: 361,
    height: 88,
    left: 28,
  },
  bmi: {
    top: 449,
    left: 92,
    fontSize: FontSize.size_3xl,
    width: 192,
    fontFamily: FontFamily.signika,
    textAlign: "center",
    lineHeight: 20,
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
  iconlyboldscan: {
    height: "2.96%",
    width: "6.4%",
    top: "91.75%",
    right: "47.47%",
    bottom: "5.3%",
    left: "46.13%",
  },
  rectangleLineargradient: {
    right: "0%",
    width: "100%",
    backgroundColor: "transparent",
    borderRadius: Border.br_13xl,
  },
  bmiInformation: {
    color: Color.colorDimgray_200,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    top: "0%",
    fontSize: FontSize.size_3xs,
    height: "100%",
    left: "0%",
    width: "100%",
  },
  bmiInformationWrapper: {
    height: "8.33%",
    width: "43.98%",
    top: "8.33%",
    right: "46.39%",
    bottom: "83.33%",
    left: "9.64%",
    position: "absolute",
  },
  groupChild5: {
    backgroundColor: "#a6a6a6",
  },
  rectangleWrapper: {
    width: "52.5%",
    right: "40.3%",
    left: "7.2%",
  },
  rectangleParent2: {
    width: "88.53%",
    top: "62.44%",
    right: "5.6%",
    bottom: "13.92%",
  },
  number: {
    top: 578,
    left: 59,
    width: 57,
    height: 20,
    textAlign: "left",
    fontFamily: FontFamily.signika,
    color: Color.bordersBackgroundsBlack,
  },
  home: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default Home;