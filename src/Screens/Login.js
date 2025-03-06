import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Profile.png")}
        style={styles.profilePic}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        placeholderTextColor="#888"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ADD8E6", // Light blue background
  },
  profilePic: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff", // White text for contrast
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff", // White background for input fields
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25, // Rounded corners
    width: "80%",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#FFD700", // Yellow button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#1E90FF", // Blue text for contrast
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Login;
