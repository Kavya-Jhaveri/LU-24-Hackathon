// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

// Importing components and screens from the second snippet
import IconlyBoldScan from "./components/IconlyBoldScan";
import IconlyBoldHome from "./components/IconlyBoldHome";
import IconlyLightProfile from "./components/IconlyLightProfile";
import IconlyBoldScan1 from "./components/IconlyBoldScan1";
import IconlyBoldHome1 from "./components/IconlyBoldHome1";
import IconlyLightProfile1 from "./components/IconlyLightProfile1";
import Onboarding from "./screens/Onboarding";
import FavoritesFood from "./screens/FavoritesFood";
import CreateAccount from "./screens/CreateAccount";
import Frame from "./screens/Frame";
import UpdatingProfile from "./screens/UpdatingProfile";
import Splash from "./screens/Splash";
import Onboarding1 from "./screens/Onboarding1";
import Onboarding2 from "./screens/Onboarding2";
import Home from "./screens/Home";
import SearchNoResults from "./screens/SearchNoResults";
import ScanFoodResults from "./screens/ScanFoodResults";
import FavoritesFood1 from "./screens/FavoritesFood1";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding"
              component={Onboarding}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoritesFood"
              component={FavoritesFood}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Frame"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="UpdatingProfile"
              component={UpdatingProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding1"
              component={Onboarding1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding2"
              component={Onboarding2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SearchNoResults"
              component={SearchNoResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ScanFoodResults"
              component={ScanFoodResults}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="FavoritesFood1"
              component={FavoritesFood1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};

export default App;

// StyleSheet from the first snippet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
