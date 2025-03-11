import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }
    navigation.navigate("MainTabs"); 
  };

  return (
    <View style={styles.container}>
      
      <Image source={require("../../assets/Darbni.jpg")} style={styles.logo} />

      
      <View style={styles.inputContainer}>
        <FontAwesome name="envelope" size={20} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      
      <View style={styles.inputContainer}>
        <FontAwesome name="lock" size={24} color="#aaa" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <LinearGradient colors={["#000", "#444"]} style={styles.buttonGradient}>
          <Text style={styles.buttonText}>Login</Text>
        </LinearGradient>
      </TouchableOpacity>

      
      <View style={styles.footerLinks}>
        {/* <TouchableOpacity>
          <Text style={styles.linkText}>Forgot password?</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 30,
    borderRadius: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: "#fff",
  },
  button: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  buttonGradient: {
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 10,
  },
  linkText: {
    color: "#888",
    fontSize: 14,
  },
});
