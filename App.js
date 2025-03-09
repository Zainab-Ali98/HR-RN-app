import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import Login from "./src/Screens/Login";
import WelcomePage from "./src/Screens/WelcomePage";
import Home from "./src/Screens/Home";
import Profile from "./src/Screens/Profile";
import MainNavigation from "./src/Navigation/MainNavigation/MainNavigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
        <MainNavigation />
        {/* <WelcomePage /> */}
        {/* <Login /> */}
        {/* <Home /> */}
        {/* <Profile /> */}
        {/* <StatusBar style="auto" /> */}
      {/* </View> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});