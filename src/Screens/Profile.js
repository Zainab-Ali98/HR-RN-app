
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [ongoingCourses, setOngoingCourses] = useState([
    {
      id: "1",
      name: "Web Development",
      progress: "100%",
      status: "completed",  
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      description: "Learn how to build modern web applications.",
      category: "Technology",
      duration: "6 weeks"
    },
    {
      id: "2",
      name: "Cybersecurity Basics",
      progress: "45%",
      status: "ongoing",
      image: "https://cdn-icons-png.flaticon.com/512/3067/3067556.png",
      description: "Introduction to Cybersecurity and online safety.",
      category: "Security",
      duration: "4 weeks"
    },
    {
      id: "3",
      name: "Project Management",
      progress: "100%",
      status: "completed",
      image: "https://cdn-icons-png.flaticon.com/512/3615/3615942.png",
      description: "Master the principles of project management.",
      category: "Business",
      duration: "8 weeks"
    },
  ]);

  const requestCertificate = (id) => {
    setOngoingCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === id ? { ...course, status: "certificate_requested" } : course
      )
    );
    alert("Certificate request sent to HR!");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Profile</Text>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => navigation.navigate("WelcomePage")}
          >
            <MaterialIcons name="logout" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/* Profile Information */}
        <View style={styles.profileCard}>
          <Image
            source={{
              // uri: "https://i.imgur.com/8Km9tLL.png",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Zainab Haji</Text>
          <Text style={styles.title}>Software Engineer</Text>
          <Text style={styles.certifications}>
            AWS Certified Developer, Scrum Master, React Native Expert
          </Text>
        </View>

        {/* Ongoing Courses */}
        <Text style={styles.sectionTitle}>Ongoing Courses</Text>
        <FlatList
          data={ongoingCourses}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate("CourseDetails", { course: item })}>
              <View style={styles.courseItem}>
                <Image source={{ uri: item.image }} style={styles.courseImage} />
                <View style={styles.courseInfo}>
                  <Text style={styles.courseName}>{item.name}</Text>
                  <Text style={styles.courseProgress}>Progress: {item.progress}</Text>

                  {item.status === "completed" && (
                    <TouchableOpacity
                      style={styles.completedButton}
                      onPress={() => requestCertificate(item.id)}
                    >
                      <Text style={styles.completedButtonText}>Completed - Request Certificate</Text>
                    </TouchableOpacity>
                  )}

                  {item.status === "certificate_requested" && (
                    <Text style={styles.pendingText}>Waiting for HR approval...</Text>
                  )}

                  {item.status === "certificate_issued" && (
                    <Text style={styles.issuedText}>🎉 Certificate Issued</Text>
                  )}

                  {item.status === "certificate_rejected" && (
                    <Text style={styles.rejectedText}>❌ Certificate Rejected</Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  scrollView: { padding: 20 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
  logoutButton: { backgroundColor: "#FF3B3B", padding: 10, borderRadius: 50 },
  profileCard: { backgroundColor: "#FFF", borderRadius: 20, padding: 20, alignItems: "center", marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: "bold", color: "#333", marginBottom: 5 },
  title: { fontSize: 18, color: "#666", marginBottom: 10 },
  certifications: { fontSize: 14, color: "#888", textAlign: "center", marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#FFF", marginBottom: 15 },
  courseItem: { flexDirection: "row", alignItems: "center", backgroundColor: "#FFF", padding: 15, borderRadius: 10, marginBottom: 10 },
  courseImage: { width: 50, height: 50, borderRadius: 10, marginRight: 15 },
  courseInfo: { flex: 1 },
  courseName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  courseProgress: { fontSize: 14, color: "#666" },
  completedButton: { backgroundColor: "#28a745", padding: 8, borderRadius: 5, marginTop: 5 },
  completedButtonText: { color: "#FFF", fontWeight: "bold", textAlign: "center" },
  pendingText: { fontSize: 14, color: "#FFA500", marginTop: 5 },
  issuedText: { fontSize: 14, color: "#4CAF50", marginTop: 5 },
  rejectedText: { fontSize: 14, color: "#D32F2F", marginTop: 5 },
});
