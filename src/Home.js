import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

const Home = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Departments (like categories)
  const [departments] = useState([
    { name: "IT", image: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png" },
    { name: "Finance", image: "https://cdn-icons-png.flaticon.com/512/2332/2332289.png" },
    { name: "Management", image: "https://cdn-icons-png.flaticon.com/512/3462/3462117.png" },
  ]);

  // Courses (like restaurants)
  const [courses] = useState([
    { name: "Web Development", department: "IT", image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png" },
    { name: "Cybersecurity", department: "IT", image: "https://cdn-icons-png.flaticon.com/512/3067/3067556.png" },
    { name: "Accounting", department: "Finance", image: "https://cdn-icons-png.flaticon.com/512/2581/2581987.png" },
    { name: "Investment Banking", department: "Finance", image: "https://cdn-icons-png.flaticon.com/512/1086/1086477.png" },
    { name: "Project Management", department: "Management", image: "https://cdn-icons-png.flaticon.com/512/3615/3615942.png" },
    { name: "Leadership Training", department: "Management", image: "https://cdn-icons-png.flaticon.com/512/3615/3615947.png" },
  ]);

  // Filtered courses based on search query and department selection
  const searchedCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (selectedDepartment === "" || course.department === selectedDepartment)
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="🔍 Search for courses..."
        placeholderTextColor="#888"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Departments */}
      <Text style={styles.sectionTitle}>Choose a Department</Text>
      <FlatList
        data={departments}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.departmentList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.departmentItem,
              selectedDepartment === item.name && styles.departmentSelected,
            ]}
            onPress={() =>
              setSelectedDepartment(selectedDepartment === item.name ? "" : item.name)
            }
          >
            <Image source={{ uri: item.image }} style={styles.departmentImage} />
            <Text style={styles.departmentText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />

      {/* Courses */}
      <Text style={styles.sectionTitle}>Available Courses</Text>
      <FlatList
        data={searchedCourses}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.courseList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.courseCard}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <Text style={styles.courseName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  searchBar: {
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    paddingHorizontal: 20,
    borderRadius: 30,
    backgroundColor: "#FFF",
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginBottom: 10,
    marginTop: 10,
  },

  departmentList: {
    paddingBottom: 15,
  },

  departmentItem: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 15,
    width: 100,
    height: 100,
    marginRight: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },

  departmentSelected: {
    backgroundColor: "#FF8C42",
  },

  departmentImage: {
    width: 45,
    height: 45,
    marginBottom: 8,
  },

  departmentText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    textAlign: "center",
  },

  courseList: {
    paddingBottom: 20,
  },

  courseCard: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    marginRight: 15,
    width: "45%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },

  courseImage: {
    width: 75,
    height: 75,
    marginBottom: 10,
  },

  courseName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#444",
    textAlign: "center",
  },
});
