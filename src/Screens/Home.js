import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Home = () => {
  const [openDepartment, setOpenDepartment] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [departments, setDepartments] = useState([
    { label: "IT", value: "IT" },
    { label: "Finance", value: "Finance" },
    { label: "Management", value: "Management" },
  ]);

  const [openCourse, setOpenCourse] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courses, setCourses] = useState([
    { label: "IT - Course 1", value: "IT - course1", department: "IT" },
    { label: "IT - Course 2", value: "IT - course2", department: "IT" },
    { label: "Finance - Course 1", value: "Finance - course1", department: "Finance" },
    { label: "Finance - Course 2", value: "Finance - course2", department: "Finance" },
    { label: "Management - Course 1", value: "Management - course1", department: "Management" },
    { label: "Management - Course 2", value: "Management - course2", department: "Management" },
  ]);
  
  const [filteredCourses, setFilteredCourses] = useState([]);

  useEffect(() => {
    if (selectedDepartment) {
      setFilteredCourses(courses.filter(course => course.department === selectedDepartment));
    } else {
      setFilteredCourses([]);
    }
  }, [selectedDepartment]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Course Selection</Text>

      <DropDownPicker
        open={openDepartment}
        value={selectedDepartment}
        items={departments}
        setOpen={setOpenDepartment}
        setValue={setSelectedDepartment}
        setItems={setDepartments}
        placeholder="Select Department"
        style={styles.input}
        dropDownContainerStyle={styles.dropDownContainer}
      />

      <DropDownPicker
        open={openCourse}
        value={selectedCourse}
        items={filteredCourses.map(course => ({ label: course.label, value: course.value }))}
        setOpen={setOpenCourse}
        setValue={setSelectedCourse}
        setItems={setFilteredCourses}
        placeholder="Select Course"
        style={styles.input}
        dropDownContainerStyle={styles.dropDownContainer}
        disabled={!selectedDepartment}
      />

      <TouchableOpacity style={styles.button} disabled={!selectedCourse}>
        <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: "#78B7D0",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    backgroundColor: "#fff",
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 25,
    width: "80%",
    fontSize: 16,
  },
  dropDownContainer: {
    borderColor: "#ccc",
    backgroundColor: "#fff",
    width: "80%",
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

export default Home;