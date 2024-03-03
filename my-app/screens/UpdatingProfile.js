import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const UpdatingProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.updatingProfile}>
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={styles.statusBar}>
        <View style={[styles.statusBarChild, styles.statusPosition]} />
        <View style={[styles.barsStatusBarIphoneL, styles.statusPosition]}>
          <View style={styles.battery}>
            <View style={[styles.border, styles.statusPosition]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
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
        <Text style={[styles.dailyPractice, styles.timeTypo]}>Search</Text>
        <Pressable
          style={[styles.component1, styles.component1Position]}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/sizes-iconarrow-back-ios.png")}
          />
        </Pressable>
        <Image
          style={[styles.component2Icon, styles.component1Position]}
          contentFit="cover"
          source={require("../assets/component-21.png")}
        />
      </View>
      <View style={styles.modelightTypealphabetic}>
        <View style={styles.homeIndicator1}>
          <View style={[styles.homeIndicator, styles.capacityBg]} />
        </View>
        <View style={styles.keys}>
          <Image
            style={styles.dictationIcon}
            contentFit="cover"
            source={require("../assets/dictation.png")}
          />
          <Image
            style={styles.emojiIcon}
            contentFit="cover"
            source={require("../assets/emoji.png")}
          />
          <View style={[styles.return, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle.png")}
            />
            <Text style={[styles.label, styles.labelTypo]}>Go</Text>
          </View>
          <View style={[styles.space, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle1.png")}
            />
            <Text style={[styles.label1, styles.labelTypo]}>space</Text>
          </View>
          <View style={[styles.view, styles.viewPosition]}>
            <Image
              style={styles.rectangleIcon}
              contentFit="cover"
              source={require("../assets/rectangle2.png")}
            />
            <Text style={[styles.label2, styles.labelTypo]}>123</Text>
          </View>
          <View style={[styles.delete, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.statusPosition]}>
              <Image
                style={styles.rectangleIcon}
                contentFit="cover"
                source={require("../assets/rectangle3.png")}
              />
              <Text style={[styles.label3, styles.labelTypo]}>{` `}</Text>
            </View>
            <Image
              style={styles.deleteButtonIcon}
              contentFit="cover"
              source={require("../assets/delete-button.png")}
            />
          </View>
          <View style={[styles.shift, styles.shiftPosition]}>
            <View style={[styles.keyLight, styles.statusPosition]}>
              <View style={styles.rectangleShadowBox} />
              <Text style={[styles.symbol, styles.symbolTypo]}>{` `}</Text>
            </View>
            <Image
              style={[styles.shiftIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/shift1.png")}
            />
          </View>
          <View style={[styles.m, styles.mPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol1, styles.symbolTypo]}>M</Text>
          </View>
          <View style={[styles.n, styles.nPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>N</Text>
          </View>
          <View style={[styles.b, styles.bPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>B</Text>
          </View>
          <View style={[styles.v, styles.vPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>V</Text>
          </View>
          <View style={[styles.c, styles.cPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>C</Text>
          </View>
          <View style={[styles.x, styles.xPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>X</Text>
          </View>
          <View style={[styles.z, styles.zPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Z</Text>
          </View>
          <View style={[styles.l, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>L</Text>
          </View>
          <View style={[styles.k, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>K</Text>
          </View>
          <View style={[styles.j, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>J</Text>
          </View>
          <View style={[styles.h, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>H</Text>
          </View>
          <View style={[styles.g, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>G</Text>
          </View>
          <View style={[styles.f, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol8, styles.symbolTypo]}>F</Text>
          </View>
          <View style={[styles.d, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>D</Text>
          </View>
          <View style={[styles.s, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>S</Text>
          </View>
          <View style={[styles.a, styles.lPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>A</Text>
          </View>
          <View style={[styles.p, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>P</Text>
          </View>
          <View style={[styles.o, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>O</Text>
          </View>
          <View style={[styles.i, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol19, styles.symbolTypo]}>I</Text>
          </View>
          <View style={[styles.u, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol2, styles.symbolTypo]}>U</Text>
          </View>
          <View style={[styles.y, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>Y</Text>
          </View>
          <View style={[styles.t, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>T</Text>
          </View>
          <View style={[styles.r, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>R</Text>
          </View>
          <View style={[styles.e, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol3, styles.symbolTypo]}>E</Text>
          </View>
          <View style={[styles.w, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol25, styles.symbolTypo]}>W</Text>
          </View>
          <View style={[styles.q, styles.pPosition]}>
            <View style={styles.rectangleShadowBox} />
            <Text style={[styles.symbol18, styles.symbolTypo]}>Q</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.profile, styles.profileTypo]}>Profile</Text>
      <Text style={[styles.dietGoals, styles.profileTypo]}>Diet Goals</Text>
      <Text style={[styles.height, styles.heightTypo1]}>Height</Text>
      <Text style={[styles.weight, styles.heightTypo1]}>Weight</Text>
      <View style={[styles.rectangleParent, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.height1, styles.heightTypo]}>1.69 inches</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.groupParentPosition]}>
        <View style={[styles.rectangleView, styles.groupChild2Position]} />
        <View style={[styles.rectangleView, styles.groupChild2Position]} />
        <View style={[styles.groupChild2, styles.groupChild2Position]} />
        <Text style={[styles.height2, styles.heightTypo]}>175 (lbs)</Text>
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupChild, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupPosition]} />
          <Text style={[styles.height1, styles.heightTypo]}>muscle loss</Text>
        </View>
      </View>
      <Text style={[styles.mealPlanData, styles.heightTypo1]}>
        Meal Plan Data
      </Text>
      <Text style={[styles.numberOfMeals, styles.profileTypo]}>
        Number of Meals Per Day
      </Text>
      <View style={[styles.groupView, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.height1, styles.heightTypo]}>
          225 meals swipe
        </Text>
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentPosition]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupChild, styles.groupPosition]} />
        <View style={[styles.groupInner, styles.groupPosition]} />
        <Text style={[styles.height1, styles.heightTypo]}>3 meals per day</Text>
      </View>
      <Image
        style={[styles.iconlylightprofile, styles.iconlylightprofileLayout]}
        contentFit="cover"
        source={require("../assets/iconlylightprofile.png")}
      />
      <Image
        style={[styles.iconlyboldhome, styles.iconLayout]}
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
        style={[styles.iconlyboldhome, styles.iconLayout]}
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
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  timeTypo: {
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    position: "absolute",
  },
  component1Position: {
    height: "22.86%",
    width: "6.4%",
    bottom: "22.86%",
    top: "54.29%",
    position: "absolute",
  },
  viewPosition: {
    bottom: "21.24%",
    top: "62.55%",
    height: "16.22%",
    position: "absolute",
  },
  labelTypo: {
    lineHeight: 21,
    fontSize: FontSize.size_base,
    top: "26.19%",
    left: 0,
    textAlign: "center",
    color: Color.bordersBackgroundsBlack,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    letterSpacing: 0,
    position: "absolute",
  },
  shiftPosition: {
    bottom: "42.08%",
    top: "41.7%",
    width: "11.38%",
    height: "16.22%",
    position: "absolute",
  },
  symbolTypo: {
    letterSpacing: -1,
    fontSize: FontSize.size_3xl_5,
    marginTop: -13,
    textAlign: "center",
    color: Color.bordersBackgroundsBlack,
    fontFamily: FontFamily.sFSubheadlineSemibold,
    top: "50%",
    position: "absolute",
  },
  mPosition: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  nPosition: {
    left: "66.12%",
    right: "25.2%",
  },
  bPosition: {
    left: "55.83%",
    right: "35.5%",
  },
  vPosition: {
    left: "45.8%",
    right: "45.53%",
  },
  cPosition: {
    left: "35.5%",
    right: "55.83%",
  },
  xPosition: {
    left: "25.47%",
    right: "65.85%",
  },
  zPosition: {
    left: "15.18%",
    right: "76.15%",
  },
  lPosition: {
    bottom: "62.93%",
    top: "20.85%",
    width: "8.67%",
    height: "16.22%",
    position: "absolute",
  },
  pPosition: {
    bottom: "83.78%",
    width: "8.67%",
    height: "16.22%",
    top: "0%",
    position: "absolute",
  },
  profileTypo: {
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.signika,
    letterSpacing: 0.8,
    height: "2.96%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  heightTypo1: {
    left: "10.93%",
    textAlign: "left",
    color: Color.colorGray_300,
    fontFamily: FontFamily.signika,
    letterSpacing: 0.8,
    height: "2.96%",
    fontSize: FontSize.sFSubheadlineSemibold_size,
    position: "absolute",
  },
  groupParentPosition: {
    left: "4.53%",
    right: "8.27%",
    width: "87.2%",
    position: "absolute",
  },
  groupPosition: {
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xl,
    top: "0%",
    height: "100%",
    bottom: "0%",
    position: "absolute",
  },
  heightTypo: {
    color: Color.colorDimgray_200,
    left: "14.68%",
    textAlign: "left",
    fontFamily: FontFamily.signika,
    fontSize: FontSize.size_base,
    lineHeight: 20,
    letterSpacing: 0,
    position: "absolute",
  },
  groupChild2Position: {
    bottom: "63.22%",
    height: "36.78%",
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_5xl,
    top: "0%",
    position: "absolute",
  },
  iconlylightprofileLayout: {
    left: "84.8%",
    right: "6.67%",
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
    height: "4.19%",
    top: "95.81%",
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  statusBarChild: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
    top: "0%",
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: Color.bordersBackgroundsBlack,
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
    bottom: "0%",
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    right: "0%",
    position: "absolute",
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
    height: 11,
    width: 15,
  },
  cellularConnectionIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -4.5,
    fontWeight: "600",
    color: Color.bordersBackgroundsBlack,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.sFSubheadlineSemibold_size,
    top: "50%",
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
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
    width: "100%",
  },
  dailyPractice: {
    top: "58.1%",
    left: "44%",
    fontSize: FontSize.headingHeading5_size,
    letterSpacing: 0.6,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.typographyHeadingMain,
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    display: "none",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  component1: {
    left: "6.4%",
    right: "87.2%",
  },
  component2Icon: {
    right: "8%",
    left: "85.6%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    display: "none",
  },
  statusBar: {
    height: "12.93%",
    top: "1.85%",
    right: "4.8%",
    bottom: "85.22%",
    left: "-4.8%",
    position: "absolute",
    width: "100%",
  },
  homeIndicator1: {
    right: -1,
    left: 1,
    height: 34,
    bottom: 0,
    position: "absolute",
  },
  dictationIcon: {
    height: 25,
    width: 15,
  },
  emojiIcon: {
    width: 27,
    height: 27,
  },
  rectangleIcon: {
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  label: {
    width: 88,
  },
  return: {
    width: "23.85%",
    left: "76.15%",
    right: "0%",
  },
  label1: {
    width: 182,
  },
  space: {
    width: "49.32%",
    right: "25.47%",
    left: "25.2%",
  },
  label2: {
    width: 87,
  },
  view: {
    width: "23.58%",
    right: "76.42%",
    left: "0%",
  },
  label3: {
    width: 42,
  },
  keyLight: {
    height: "100%",
    bottom: "0%",
    right: "0%",
    width: "100%",
  },
  deleteButtonIcon: {
    width: 23,
    height: 17,
  },
  delete: {
    left: "88.62%",
    right: "0%",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 0,
    shadowRadius: 0,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#898a8d",
    backgroundColor: Color.colorGray_100,
    borderRadius: Border.br_8xs_6,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
  },
  symbol: {
    left: "48.1%",
  },
  shiftIcon: {
    height: "39.29%",
    width: "45%",
    top: "29.05%",
    right: "27.14%",
    bottom: "31.67%",
    left: "27.86%",
    position: "absolute",
  },
  shift: {
    right: "88.62%",
    left: "0%",
  },
  symbol1: {
    left: "18.75%",
  },
  m: {
    right: "14.91%",
    left: "76.42%",
  },
  symbol2: {
    left: "25%",
  },
  n: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol3: {
    left: "28.13%",
  },
  b: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  v: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  c: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  x: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  z: {
    width: "8.67%",
    bottom: "42.08%",
    top: "41.7%",
    height: "16.22%",
    position: "absolute",
  },
  symbol8: {
    left: "31.25%",
  },
  l: {
    right: "4.88%",
    left: "86.45%",
  },
  k: {
    right: "15.18%",
    left: "76.15%",
  },
  j: {
    left: "66.12%",
    right: "25.2%",
  },
  h: {
    left: "55.83%",
    right: "35.5%",
  },
  g: {
    left: "45.8%",
    right: "45.53%",
  },
  f: {
    left: "35.5%",
    right: "55.83%",
  },
  d: {
    left: "25.47%",
    right: "65.85%",
  },
  s: {
    left: "15.18%",
    right: "76.15%",
  },
  a: {
    right: "86.18%",
    left: "5.15%",
  },
  p: {
    left: "91.33%",
    right: "0%",
  },
  symbol18: {
    left: "21.88%",
  },
  o: {
    right: "10.03%",
    left: "81.3%",
  },
  symbol19: {
    left: "40.63%",
  },
  i: {
    right: "20.33%",
    left: "71%",
  },
  u: {
    right: "30.35%",
    left: "60.98%",
  },
  y: {
    right: "40.65%",
    left: "50.68%",
  },
  t: {
    right: "50.68%",
    left: "40.65%",
  },
  r: {
    right: "60.98%",
    left: "30.35%",
  },
  e: {
    right: "71%",
    left: "20.33%",
  },
  symbol25: {
    left: "15.63%",
  },
  w: {
    right: "81.3%",
    left: "10.03%",
  },
  q: {
    right: "91.33%",
    left: "0%",
  },
  keys: {
    height: "89%",
    width: "98.4%",
    top: "2.75%",
    right: "0.8%",
    bottom: "8.25%",
    left: "0.8%",
    position: "absolute",
  },
  modelightTypealphabetic: {
    height: "35.84%",
    top: "64.16%",
    backgroundColor: Color.colorLightgray,
    display: "none",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  profile: {
    top: "8.25%",
    left: "42.4%",
    width: "15.2%",
  },
  dietGoals: {
    width: "21.6%",
    top: "42.73%",
    left: "9.6%",
  },
  height: {
    top: "14.78%",
    width: "15.2%",
  },
  weight: {
    top: "28.33%",
    width: "15.2%",
  },
  groupChild: {
    left: "3.67%",
    right: "3.67%",
    width: "92.66%",
  },
  groupInner: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  height1: {
    top: "34.38%",
  },
  rectangleParent: {
    top: "19.09%",
    bottom: "73.03%",
    height: "7.88%",
    right: "8.27%",
    width: "87.2%",
  },
  rectangleView: {
    left: "3.67%",
    right: "3.67%",
    width: "92.66%",
  },
  groupChild2: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  height2: {
    top: "12.64%",
  },
  rectangleContainer: {
    top: "63.22%",
    height: "36.78%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  rectangleGroup: {
    height: "21.43%",
    top: "32.64%",
    bottom: "45.94%",
  },
  mealPlanData: {
    width: "33.6%",
    top: "56.4%",
  },
  numberOfMeals: {
    width: "49.6%",
    top: "71.31%",
    left: "8.53%",
  },
  groupView: {
    top: "60.71%",
    bottom: "31.4%",
    height: "7.88%",
    right: "8.27%",
    width: "87.2%",
  },
  rectangleParent1: {
    top: "74.26%",
    bottom: "17.86%",
    height: "7.88%",
    right: "8.27%",
    width: "87.2%",
  },
  iconlylightprofile: {
    top: "91.75%",
    bottom: "4.31%",
  },
  iconlyboldhome: {
    height: "4.43%",
    width: "9.6%",
    top: "92%",
    bottom: "3.57%",
    left: "3.2%",
    right: "87.2%",
    position: "absolute",
  },
  iconlyboldscan: {
    top: "92.36%",
    right: "48%",
    bottom: "4.68%",
    left: "45.6%",
    height: "2.96%",
    width: "6.4%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconlylightprofile1: {
    top: "92.24%",
    bottom: "3.82%",
  },
  updatingProfile: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default UpdatingProfile;