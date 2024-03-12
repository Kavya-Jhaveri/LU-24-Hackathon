import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const SearchNoResults = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.searchNoResults}>
      <View style={styles.searchNoResultsChild} />
      <View style={styles.modelight}>
        <View style={[styles.homeIndicator, styles.capacityBg]} />
      </View>
      <View style={[styles.statusBar, styles.statusPosition]}>
        <View style={[styles.statusBarChild, styles.borderPosition]} />
        <View style={[styles.barsStatusBarIphoneL, styles.statusPosition]}>


        </View>
        <Text style={styles.dailyPractice}>Search</Text>

        {/* display the image ../assets/sizes-iconarrow-back-ios.png and when clicked return to home.js */}
        

        
        {/* <Image
          style={[styles.component1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/sizes-iconarrow-back-ios.png")}
        /> */}

    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Home')}>
      <Image
        source={require('../assets/sizes-iconarrow-back-ios.png')} // Replace with your image path
        style={styles.image}
      />
    </TouchableOpacity>


        {/* <Image
          style={[styles.component2Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/component-21.png")}
        /> */}
      </View>
      <View style={[styles.line, styles.lineBorder]} />
      <Text style={[styles.nd, styles.ndFlexBox]}>nd</Text>
      <View style={styles.rectangle} />
      <View style={[styles.row, styles.rowPosition]}>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Mo</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Tu</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>We</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Th</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Tr</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Sa</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Su</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>26</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>27</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>29</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>2</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>3</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row2, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>4</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>6</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>7</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>8</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>9</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>10</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row3, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>11</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>12</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>13</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>14</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>15</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>16</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>17</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row4, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>18</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>19</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>20</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>21</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>22</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>23</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>24</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row5, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>25</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>26</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>27</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>29</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>30</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>31</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row, styles.rowPosition]}>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Mo</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Tu</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>We</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Th</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Tr</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Sa</Text>
        </View>
        <View style={[styles.headerCell, styles.cellFlexBox]}>
          <Text style={styles.text}>Su</Text>
        </View>
      </View>
      <View style={[styles.row1, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>26</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>27</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text7, styles.textTypo]}>29</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>1</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>2</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>3</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row2, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>4</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>5</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>6</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>7</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>8</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>9</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>10</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row3, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>11</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>12</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>13</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>14</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>15</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>16</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>17</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row4, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>18</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>19</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>20</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>21</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>22</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>23</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>24</Text>
          </View>
        </View>
      </View>
      <View style={[styles.row5, styles.rowPosition]}>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>25</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>26</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>27</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>28</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>29</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>30</Text>
          </View>
        </View>
        <View style={[styles.cell, styles.cellFlexBox]}>
          <View style={[styles.inner, styles.cellFlexBox]}>
            <Text style={[styles.text11, styles.textTypo]}>31</Text>
          </View>
        </View>
      </View>
      <Text style={[styles.calendar, styles.ndFlexBox]}>{`Calendar
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  capacityBg: {
    backgroundColor: Color.bordersBackgroundsBlack,
    position: "absolute",
  },
  statusPosition: {
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  borderPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  lineBorder: {
    borderColor: Color.bordersBackgroundsBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  iconLayout: {
    bottom: "22.86%",
    top: "54.29%",
    width: "6.4%",
    height: "22.86%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  ndFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rowPosition: {
    flexDirection: "row",
    left: 19,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  cellFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  textTypo: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.inter,
    textAlign: "left",
  },
  searchNoResultsChild: {
    top: 716,
    left: 24,
    borderColor: "#f5f5f5",
    borderTopWidth: 1,
    width: 328,
    height: 1,
    borderStyle: "solid",
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
  statusBarChild: {
    right: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
  border: {
    width: "90.53%",
    right: "9.47%",
    borderRadius: 3,
    borderWidth: 1,
    opacity: 0.35,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
  },
  image: {
    width: 705, // Adjust width as needed
    height: 100, // Adjust height as needed
    right: "-5.47%",
    top: "16.74%",
    width: "5.35%",
    resizeMode: 'contain', // Adjust resizeMode as needed
  },
  capIcon: {
    height: "35.4%",
    width: "5.35%",
    top: "32.74%",
    bottom: "31.86%",
    left: "94.65%",
    opacity: 0.4,
    maxHeight: "100%",
    maxWidth: "100%",
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
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "600",
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    color: Color.bordersBackgroundsBlack,
    fontSize: FontSize.sFSubheadlineSemibold_size,
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
  barsStatusBarIphoneL: {
    height: "41.9%",
    bottom: "58.1%",
  },
  dailyPractice: {
    top: "58.1%",
    left: "44%",
    letterSpacing: 0.6,
    lineHeight: 16,
    fontWeight: "500",
    color: Color.typographyHeadingMain,
    fontSize: FontSize.headingHeading5_size,
    textAlign: "center",
    fontFamily: FontFamily.sFSubheadlineSemibold,
    display: "none",
    position: "absolute",
  },
  component1Icon: {
    right: "87.2%",
    left: "6.4%",
  },
  component2Icon: {
    right: "8%",
    left: "85.6%",
    display: "none",
  },
  statusBar: {
    height: "12.93%",
    bottom: "87.07%",
  },
  line: {
    top: 231,
    left: -23,
    borderTopWidth: 5,
    width: 405,
    height: 5,
  },
  nd: {
    top: 294,
    left: 52,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.barlow,
    color: Color.bordersBackgroundsBlack,
    textAlign: "left",
  },
  rectangle: {
    top: 274,
    left: 15,
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
    position: "absolute",
  },
  text: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.inter,
    textAlign: "left",
    fontSize: FontSize.headingHeading5_size,
  },
  headerCell: {
    height: 32,
    width: 48,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro_100,
    alignItems: "center",
    borderStyle: "solid",
  },
  row: {
    top: 238,
  },
  text7: {
    color: Color.colorDarkgray_100,
  },
  inner: {
    borderRadius: Border.br_lg,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  cell: {
    height: 48,
    width: 48,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: Color.colorGainsboro_100,
    alignItems: "center",
    borderStyle: "solid",
  },
  text11: {
    color: Color.colorDarkslategray_100,
  },
  row1: {
    top: 270,
  },
  row2: {
    top: 318,
  },
  row3: {
    top: 366,
  },
  row4: {
    top: 414,
  },
  row5: {
    top: 462,
  },
  calendar: {
    top: 57,
    left: 144,
    letterSpacing: 0.8,
    fontFamily: FontFamily.signika,
    color: Color.colorGray_300,
    textAlign: "left",
    fontSize: FontSize.sFSubheadlineSemibold_size,
  },
  searchNoResults: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bordersBackgroundsWhiteBackground,
  },
});

export default SearchNoResults;
