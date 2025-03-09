import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={{ position: "absolute", top: 60, right: 20 }}>
        <TouchableOpacity
          onPress={() => {
            // deleteToken();
            setIsAuth(false);
          }}
        >
          <MaterialIcons name="logout" size={28} color="red" />
        </TouchableOpacity>
      </View>
      {/* Employee Name */}
      <Text style={styles.title}>Zainab Haji</Text>

      {/* Employee Title */}
      <Text style={styles.subtitle}>Software Engineer</Text>

      {/* Certifications */}
      <Text style={styles.certifications}>
        Certifications: AWS Certified Developer, Scrum Master, React Native
        Expert
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Contact</Text>
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
    backgroundColor: "#78B7D0", // Updated background color
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff", // White text for contrast
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  certifications: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#FFD700",
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
    color: "#1E90FF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Profile;
