import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useColorScheme,
  Linking,
  Modal,
  Switch,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const WelcomePage = ({ navigation }) => {
  const colorScheme = useColorScheme(); 
  const [loading, setLoading] = useState(false); 
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSocialClick = async (url) => {
    setLoading(true); 

    setTimeout(() => {
      setLoading(false); 
      Linking.openURL(url);
    }, 2000);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#1C1C1C" : "#F5F7FA" },
      ]}
    >
    
      <View style={styles.topRightContainer}>
        <Text style={{ color: isDarkMode ? "#fff" : "#333", fontSize: 14 }}>
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(!isDarkMode)}
        />
      </View>



      {/* <View style={styles.languageSelector}>
  <TouchableOpacity onPress={() => setLanguage("en")}>
    <Text style={styles.languageText}> English</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setLanguage("ar")}>
    <Text style={styles.languageText}>العربية</Text>
  </TouchableOpacity>
</View> */}


{/*       
      <Image
        source={require("../../assets/Darbni.jpg")}
        style={styles.logoImage}
        
      /> */}

<Image source={require("../../assets/Darbni.jpg")} style={styles.image} />

     
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient colors={["#000", "#333"]} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

     
      <View style={styles.socialContainer}>
        <TouchableOpacity
          onPress={() => handleSocialClick("https://abk.eahli.com/en/")}
          style={styles.iconButton}
        >
          <FontAwesome name="globe" size={30} color="#007AFF" />
          <Text style={styles.iconText}>Website</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSocialClick("https://www.instagram.com/abk_kuwait/")}
          style={styles.iconButton}
        >
          <FontAwesome name="instagram" size={30} color="#E1306C" />
          <Text style={styles.iconText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleSocialClick("https://twitter.com/abk_kuwait")}
          style={styles.iconButton}
        >
          <FontAwesome name="twitter" size={30} color="#1DA1F2" />
          <Text style={styles.iconText}>Twitter</Text>
        </TouchableOpacity>
      </View>

     
      <TouchableOpacity>
        <Text style={styles.termsText}>Terms & Conditions | Privacy Policy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topRightContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
//   logoImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75, 
//     resizeMode: "cover",
//     marginBottom: 30,
//   },
  button: {
    width: "90%",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
  },
  buttonGradient: {
    paddingVertical: 18,
    alignItems: "center",
    borderRadius: 15,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 15,
    resizeMode: "cover",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  iconButton: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  termsText: {
    marginTop: 15,
    fontSize: 12,
    color: "#888",
    textDecorationLine: "underline",
  },
});
