import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useColorScheme,
  Linking,
  Modal,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as Animatable from "react-native-animatable";

const WelcomePage = ({ navigation }) => {
  const colorScheme = useColorScheme(); 
  const [loading, setLoading] = useState(false); // Track if loading screen is active

  const handleLogin = () => {
    navigation.navigate("Login");
  };

  const handleSocialClick = async (url) => {
    setLoading(true); // Show the loading screen

    setTimeout(() => {
      setLoading(false); // Hide loading after 2 seconds
      Linking.openURL(url);
    }, 2000);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colorScheme === "dark" ? "#1C1C1C" : "#F5F7FA" },
      ]}
    >
      {/* Full-Screen Loading Overlay */}
      <Modal visible={loading} transparent>
        <View style={styles.loadingContainer}>
          <Image source={require("../../assets/Darbni.jpg")} style={styles.loadingImage} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </Modal>

      {/* Animated Welcome Message
      <Animatable.Text animation="fadeInDown" duration={1500} style={styles.title}>
        Welcome! 🚀
      </Animatable.Text> */}

      {/* Image */}
      <Image source={require("../../assets/Darbni.jpg")} style={styles.image} />

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient colors={["#000", "#333"]} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      {/* Social Media Links */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={() => handleSocialClick("https://abk.eahli.com/en/")} style={styles.iconButton}>
          <FontAwesome name="globe" size={30} color="#007AFF" />
          <Text style={styles.iconText}>Website</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSocialClick("https://www.instagram.com/abk_kuwait/")} style={styles.iconButton}>
          <FontAwesome name="instagram" size={30} color="#E1306C" />
          <Text style={styles.iconText}>Instagram</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleSocialClick("https://twitter.com/abk_kuwait")} style={styles.iconButton}>
          <FontAwesome name="twitter" size={30} color="#1DA1F2" />
          <Text style={styles.iconText}>Twitter</Text>
        </TouchableOpacity>
      </View>
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

  loadingContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)", 
    justifyContent: "center",
    alignItems: "center",
  },

  loadingImage: {
    width: 150,
    height: 150,
    borderRadius: 20,
    resizeMode: "cover",
    marginBottom: 10,
  },

  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF",
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 10,
  },

  image: {
    width: "100%",
    height: 160,
    borderRadius: 15,
    resizeMode: "cover",
    marginBottom: 20,
  },

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

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
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
});
