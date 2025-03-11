import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          console.log("Logout pressed");
        }}
      >
        <MaterialIcons name="logout" size={24} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.profileCard}>
        <Image
          source={
            {
              // uri: "https://i.imgur.com/8Km9tLL.png",
            }
          }
          style={styles.profileImage}
        />

        <Text style={styles.name}>Zainab Haji</Text>

        <Text style={styles.title}>Software Engineer</Text>

        <Text style={styles.certifications}>
          Certifications: AWS Certified Developer, Scrum Master, React Native
          Expert
        </Text>

        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoutButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "#FF3B3B",
    padding: 10,
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: "center",
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  title: {
    fontSize: 18,
    color: "#666",
    marginBottom: 15,
  },
  certifications: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginBottom: 20,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: "#000",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  contactButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Profile;
