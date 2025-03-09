import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
// import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeNavigation from "../HomeNavigation/HomeNavigation";
import AuthNavigation from "../AuthNavigation/AuthNavigation";
import ProfileNavigation from "../ProfileNavigation/ProfileNavigation"; // Add this import statement
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Login from "../../Screens/Login";
import WelcomePage from "../../Screens/WelcomePage";

const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator>
      {/* //   screenOptions={{
        headerShadowVisible: true,
        headerShown: true,
        tabBarStyle: { backgroundColor: "#e6f7ff" },
      }}
    > */}
      {/* <Tab.Screen
        name="HomeNavigation"
        component={HomeNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      /> */}
      {/* //   <Tab.Screen
        name="AuthNavigation"
        component={AuthNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "Account",
        }}
      /> */}
      {/* //   <Tab.Screen
        name="Profile"
        component={ProfileNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      /> */}
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Login" component={Login} />
      {/* <Tab.Screen name="WelcomePage" component={WelcomePage} /> */}
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
