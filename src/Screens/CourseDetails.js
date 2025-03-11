import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const CourseDetails = ({ route }) => {
  const navigation = useNavigation();
  const { course } = route.params || {};

  if (!course || Object.keys(course).length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>⚠️ Course details not available.</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <FontAwesome name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="#fff" />
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Course Image */}
        <Image source={{ uri: course.image }} style={styles.image} />

        {/* Course Name */}
        <Text style={styles.name}>{course.name}</Text>

        {/* Course Description */}
        <Text style={styles.description}>{course.description || "No description available."}</Text>

        {/* Course Category */}
        {course.category && (
          <Text style={styles.category}>Category: {course.category}</Text>
        )}

        {/* Course Duration */}
        {course.duration && (
          <Text style={styles.duration}>Duration: {course.duration} weeks</Text>
        )}

        {/* Enroll Button */}
        <TouchableOpacity style={styles.enrollButton} onPress={() => alert(`You have enrolled in ${course.name}!`)}>
          <Text style={styles.enrollButtonText}>Enroll Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  contentContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: "center", 
    justifyContent: "center", 
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 10,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
  },
  errorText: {
    fontSize: 18,
    color: "#D32F2F",
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    width: "80%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#FFFFFF",
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: "center",
    color: "#EEEEEE",
  },
  category: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: "center",
    fontStyle: "italic",
    color: "#BDBDBD",
    backgroundColor: "#333333",
    padding: 8,
    borderRadius: 10,
  },
  duration: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  enrollButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  enrollButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
