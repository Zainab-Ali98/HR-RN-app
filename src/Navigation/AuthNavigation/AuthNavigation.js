import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Login";
import WelcomePage from "../../Screens/WelcomePage";
import Home from "../../Screens/Home";

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#e6f7ff" },
      }}
    >
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

const styles = StyleSheet.create({});
