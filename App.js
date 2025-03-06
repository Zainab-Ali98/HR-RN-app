import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Login from "./src/Screens/Login";
import WelcomePage from "./src/Screens/WelcomePage";

export default function App() {
  return (
    <>
      <Login />
      {/* <WelcomePage /> */}
      <StatusBar style="auto" />
    </>
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
