// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   ScrollView,
//   SafeAreaView,
// } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";

// const HRScreen = () => {
//   // ✅ Sample Employees
//   const [employees, setEmployees] = useState([
//     { id: "1", name: "Ali Ahmed", position: "Software Engineer" },
//     { id: "2", name: "Sara Khalid", position: "HR Specialist" },
//   ]);

//   // ✅ Sample Courses
//   const [courses, setCourses] = useState([
//     { id: "101", name: "Leadership Training" },
//     { id: "102", name: "Advanced Project Management" },
//   ]);

//   // ✅ Sample Applications
//   const [applications, setApplications] = useState([
//     { id: "201", name: "Omar Saleh", course: "Leadership Training", status: "Pending" },
//     { id: "202", name: "Fatima Yusuf", course: "Project Management", status: "Pending" },
//   ]);

//   // ✅ Calculate Pending Applications Count
//   const pendingCount = applications.filter((app) => app.status === "Pending").length;

//   // ✅ Employee State for Adding
//   const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });

//   // ✅ Course State for Adding
//   const [newCourse, setNewCourse] = useState("");

//   // ➕ **Add Employee**
//   const addEmployee = () => {
//     if (!newEmployee.name || !newEmployee.position) {
//       Alert.alert("Error", "Please enter all employee details.");
//       return;
//     }
//     setEmployees([...employees, { id: Math.random().toString(), ...newEmployee }]);
//     setNewEmployee({ name: "", position: "" });
//   };

//   // ❌ **Delete Employee**
//   const deleteEmployee = (id) => {
//     setEmployees(employees.filter((emp) => emp.id !== id));
//   };

//   // ➕ **Add Course**
//   const addCourse = () => {
//     if (!newCourse) {
//       Alert.alert("Error", "Please enter a course name.");
//       return;
//     }
//     setCourses([...courses, { id: Math.random().toString(), name: newCourse }]);
//     setNewCourse("");
//   };

//   // ❌ **Delete Course**
//   const deleteCourse = (id) => {
//     setCourses(courses.filter((course) => course.id !== id));
//   };

//   // ✅ **Approve or Reject Enrollment**
//   const handleApplication = (id, status) => {
//     setApplications(
//       applications.map((app) =>
//         app.id === id ? { ...app, status } : app
//       )
//     );
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         {/* 🔹 Header with Notification Badge */}
//         <View style={styles.header}>
//           <Text style={styles.title}>HR Management</Text>
//           {pendingCount > 0 && (
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{pendingCount}</Text>
//             </View>
//           )}
//         </View>

//         {/* 🏢 **Employees Section** */}
//         <View style={styles.card}>
//           <Text style={styles.sectionTitle}>Employees</Text>
//           <FlatList
//             data={employees}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text style={styles.listText}>{item.name} - {item.position}</Text>
//                 <TouchableOpacity onPress={() => deleteEmployee(item.id)}>
//                   <FontAwesome name="trash" size={20} color="red" />
//                 </TouchableOpacity>
//               </View>
//             )}
//             scrollEnabled={false}
//           />

//           {/* ➕ Add Employee */}
//           <TextInput
//             style={styles.input}
//             placeholder="Employee Name"
//             placeholderTextColor="#aaa"
//             value={newEmployee.name}
//             onChangeText={(text) => setNewEmployee({ ...newEmployee, name: text })}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Position"
//             placeholderTextColor="#aaa"
//             value={newEmployee.position}
//             onChangeText={(text) => setNewEmployee({ ...newEmployee, position: text })}
//           />
//           <TouchableOpacity style={styles.button} onPress={addEmployee}>
//             <Text style={styles.buttonText}>Add Employee</Text>
//           </TouchableOpacity>

//           {/* 📚 **Courses Section** */}
//           <Text style={styles.sectionTitle}>Courses</Text>
//           <FlatList
//             data={courses}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text style={styles.listText}>{item.name}</Text>
//                 <TouchableOpacity onPress={() => deleteCourse(item.id)}>
//                   <FontAwesome name="trash" size={20} color="red" />
//                 </TouchableOpacity>
//               </View>
//             )}
//             scrollEnabled={false}
//           />

//           {/* ➕ Add Course */}
//           <TextInput
//             style={styles.input}
//             placeholder="Course Name"
//             placeholderTextColor="#aaa"
//             value={newCourse}
//             onChangeText={setNewCourse}
//           />
//           <TouchableOpacity style={styles.button} onPress={addCourse}>
//             <Text style={styles.buttonText}>Add Course</Text>
//           </TouchableOpacity>

//           {/* 📩 **Enrollment Applications** */}
//           <Text style={styles.sectionTitle}>Enrollment Applications</Text>
//           <FlatList
//             data={applications}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//               <View style={styles.listItem}>
//                 <Text style={styles.listText}>{item.name} applied for {item.course}</Text>
                
//                 {item.status === "Pending" ? (
//                   <View style={styles.buttonGroup}>
//                     <TouchableOpacity onPress={() => handleApplication(item.id, "Approved")}>
//                       <FontAwesome name="check" size={20} color="green" />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => handleApplication(item.id, "Rejected")}>
//                       <FontAwesome name="times" size={20} color="red" />
//                     </TouchableOpacity>
//                   </View>
//                 ) : (
//                   <Text style={{ color: item.status === "Approved" ? "green" : "red" }}>
//                     {item.status}
//                   </Text>
//                 )}
//               </View>
//             )}
//             scrollEnabled={false}
//           />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default HRScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   scrollView: {
//     padding: 20,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "bold",
//     color: "#fff",
//     textAlign: "center",
//   },
//   badge: {
//     backgroundColor: "red",
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: 10,
//   },
//   badgeText: {
//     color: "#FFF",
//     fontSize: 14,
//     fontWeight: "bold",
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 20,
//     shadowColor: "#fff",
//     elevation: 5,
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#000",
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   listItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: "#f0f0f0",
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   listText: {
//     color: "#000",
//   },
//   button: {
//     backgroundColor: "#000",
//     paddingVertical: 12,
//     borderRadius: 10,
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   buttonGroup: {
//     flexDirection: "row",
//     gap: 10,
//   },
// });






import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const HRScreen = () => {
  // Sample Employees
  const [employees, setEmployees] = useState([
    { id: "1", name: "Ali Ahmed", position: "Software Engineer" },
    { id: "2", name: "Sara Khalid", position: "HR Specialist" },
  ]);

  // Sample Courses
  const [courses, setCourses] = useState([
    { id: "101", name: "Leadership Training" },
    { id: "102", name: "Advanced Project Management" },
  ]);

  // Sample Certificate Requests
  const [certRequests, setCertRequests] = useState([
    { id: "201", name: "Omar Saleh", course: "Leadership Training", status: "Pending" },
    { id: "202", name: "Fatima Yusuf", course: "Project Management", status: "Pending" },
  ]);

  // Count of pending requests
  const pendingCount = certRequests.filter((req) => req.status === "Pending").length;

  // State for adding employees
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "" });

  // State for adding courses
  const [newCourse, setNewCourse] = useState("");

  // ➕ Add Employee
  const addEmployee = () => {
    if (!newEmployee.name || !newEmployee.position) {
      Alert.alert("Error", "Please enter employee details.");
      return;
    }
    setEmployees([...employees, { id: Math.random().toString(), ...newEmployee }]);
    setNewEmployee({ name: "", position: "" });
  };

  // ❌ Delete Employee
  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  // ➕ Add Course
  const addCourse = () => {
    if (!newCourse) {
      Alert.alert("Error", "Please enter a course name.");
      return;
    }
    setCourses([...courses, { id: Math.random().toString(), name: newCourse }]);
    setNewCourse("");
  };

  // ❌ Delete Course
  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  // ✅ Approve or Reject Certificate Requests
  const handleCertRequest = (id, status) => {
    setCertRequests(
      certRequests.map((req) => (req.id === id ? { ...req, status } : req))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Header with Pending Notifications */}
        <View style={styles.header}>
          <Text style={styles.title}>HR Dashboard</Text>
          {pendingCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{pendingCount}</Text>
            </View>
          )}
        </View>

        {/* 👨‍💼 Employees Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Employees</Text>
          <FlatList
            data={employees}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  {item.name} - {item.position}
                </Text>
                <TouchableOpacity onPress={() => deleteEmployee(item.id)}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            scrollEnabled={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Employee Name"
            placeholderTextColor="#aaa"
            value={newEmployee.name}
            onChangeText={(text) => setNewEmployee({ ...newEmployee, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Position"
            placeholderTextColor="#aaa"
            value={newEmployee.position}
            onChangeText={(text) => setNewEmployee({ ...newEmployee, position: text })}
          />
          <TouchableOpacity style={styles.button} onPress={addEmployee}>
            <Text style={styles.buttonText}>Add Employee</Text>
          </TouchableOpacity>
        </View>

        {/* 📚 Courses Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Courses</Text>
          <FlatList
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>{item.name}</Text>
                <TouchableOpacity onPress={() => deleteCourse(item.id)}>
                  <FontAwesome name="trash" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
            scrollEnabled={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Course Name"
            placeholderTextColor="#aaa"
            value={newCourse}
            onChangeText={setNewCourse}
          />
          <TouchableOpacity style={styles.button} onPress={addCourse}>
            <Text style={styles.buttonText}>Add Course</Text>
          </TouchableOpacity>
        </View>

        {/* 🎓 Certificate Requests Section */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Certificate Requests</Text>
          <FlatList
            data={certRequests}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.listItem}>
                <Text style={styles.listText}>
                  {item.name} - {item.course}
                </Text>

                {item.status === "Pending" ? (
                  <View style={styles.buttonGroup}>
                    <TouchableOpacity onPress={() => handleCertRequest(item.id, "Approved")}>
                      <MaterialIcons name="check-circle" size={24} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleCertRequest(item.id, "Rejected")}>
                      <MaterialIcons name="cancel" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                ) : (
                  <Text style={{ color: item.status === "Approved" ? "green" : "red" }}>
                    {item.status}
                  </Text>
                )}
              </View>
            )}
            scrollEnabled={false}
          />

 {/* ✅ Navigate to HRPanel Button */}
 <TouchableOpacity 
          style={styles.navigateButton} 
          onPress={() => navigation.navigate("HRPanel")}
        >
          <Text style={styles.navigateButtonText}>Manage Certificate Requests</Text>
        </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HRScreen;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f8f8" },
    scrollView: { padding: 20 },
    header: { flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 20 },
    title: { fontSize: 26, fontWeight: "bold", color: "#000" },
    badge: { backgroundColor: "red", width: 24, height: 24, borderRadius: 12, alignItems: "center", justifyContent: "center", marginLeft: 10 },
    badgeText: { color: "#FFF", fontSize: 14, fontWeight: "bold" },
  
    // ✅ Navigate Button
    navigateButton: {
      backgroundColor: "#007bff",
      padding: 12,
      borderRadius: 10,
      alignItems: "center",
      marginBottom: 20,
    },
    navigateButtonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold",
    },
  
    card: { backgroundColor: "#FFF", borderRadius: 15, padding: 20, marginBottom: 20, shadowColor: "#000", elevation: 5 },
    sectionTitle: { fontSize: 20, fontWeight: "bold", color: "#000", marginBottom: 10 },
    listItem: { flexDirection: "row", justifyContent: "space-between", padding: 10, borderRadius: 10, marginBottom: 10, backgroundColor: "#f0f0f0" },
    listText: { color: "#000" },
    input: { backgroundColor: "#fff", padding: 10, borderRadius: 10, marginBottom: 10, borderWidth: 1, borderColor: "#ddd" },
    button: { backgroundColor: "#000", padding: 12, borderRadius: 10, alignItems: "center" },
    buttonText: { color: "#FFF", fontWeight: "bold" },
  });
  
  




