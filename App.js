// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState, useEffect } from "react";
// import Login from "./src/Screens/Login";
// import WelcomePage from "./src/Screens/WelcomePage";
// import Home from "./src/Screens/Home";
// import Profile from "./src/Screens/Profile";
import MainNavigation from "./src/Navigation/MainNavigation/MainNavigation";
import AuthNavigation from "./src/Navigation/AuthNavigation/AuthNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserContext from "./src/components/Context/UserContext";
import { deleteToken, getToken } from "./src/api/storage";

export default function App() {
  const queryClinet = new QueryClient();
  const [isAuth, setIsAuth] = useState(false);

  const checkToken = async () => {
    const token = await getToken();
    if (token) {
      setIsAuth(true);
    }
  };
  useEffect(() => {
    // deleteToken();
    checkToken();
  });
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <QueryClientProvider client={queryClinet}>
        <UserContext.Provider value={{ isAuth, setIsAuth }}>
          {isAuth ? <MainNavigation /> : <AuthNavigation />}
          {/* <MainNavigation /> */}
          {/* <WelcomePage /> */}
          {/* <Login /> */}
          {/* <Home /> */}
          {/* <Profile /> */}
          {/* <StatusBar style="auto" /> */}
          {/* </View> */}
        </UserContext.Provider>
      </QueryClientProvider>
    </NavigationContainer>
    // </View>
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
