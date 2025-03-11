// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";
// import { StyleSheet } from "react-native";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
// import EvilIcons from "@expo/vector-icons/EvilIcons";

// // Import Screens
// import Home from "../../Screens/Home";
// import Profile from "../../Screens/Profile";
// import Login from "../../Screens/Login";
// import WelcomePage from "../../Screens/WelcomePage";
// import CourseDetails from "../../Screens/CourseDetails";
// import HRScreen from "../../Screens/HRScreen";

// const Tab = createBottomTabNavigator();
// const Stack = createStackNavigator();


// const BottomTabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{ headerShown: false }}>
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <AntDesign name="home" size={size} color={color} />
//           ),
//           tabBarLabel: "Home",
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <EvilIcons name="user" size={size} color={color} />
//           ),
//           tabBarLabel: "Profile",
//         }}
//       />
//       <Tab.Screen
//         name="HR Panel"
//         component={HRScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <MaterialCommunityIcons name="account" size={size} color={color} />
//           ),
//           tabBarLabel: "HR",
//         }}
//       />
//     </Tab.Navigator>
//   );
// };


// const MainNavigation = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
     
//       <Stack.Screen name="MainTabs" component={BottomTabNavigator} />

      
//       <Stack.Screen name="Login" component={Login} />
//       <Stack.Screen name="WelcomePage" component={WelcomePage} />
//       <Stack.Screen name="CourseDetails" component={CourseDetails} />
//     </Stack.Navigator>
//   );
// };

// export default MainNavigation;

// const styles = StyleSheet.create({});



import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";

// ✅ Import Screens
import Home from "../../Screens/Home";
import Profile from "../../Screens/Profile";
import Login from "../../Screens/Login";
import WelcomePage from "../../Screens/WelcomePage";
import CourseDetails from "../../Screens/CourseDetails";
import HRScreen from "../../Screens/HRScreen"; // ✅ Ensure this file exists
import HRPanel from "../../Screens/HRPanel";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// ✅ Bottom Tab Navigation
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
      <Tab.Screen
        name="HR Screen"
        component={HRScreen} // ✅ Make sure HRScreen.js exists
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "HR",
        }}
      />
<Tab.Screen
        name="HR Panel"
        component={HRPanel} // ✅ Make sure HRScreen.js exists
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
          tabBarLabel: "HR",
        }}
      />


    </Tab.Navigator>
  );
};

// ✅ Stack Navigation
const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={BottomTabNavigator} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="CourseDetails" component={CourseDetails} />
      <Stack.Screen name="HRPanel" component={HRPanel} />
      <Stack.Screen name="HRScreen" component={HRScreen} />
      
    </Stack.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({});
