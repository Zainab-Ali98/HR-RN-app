import React, { useState } from "react";
import { 
  StyleSheet, Text, View, FlatList, TouchableOpacity, Image, Alert 
} from "react-native";

const HRPanel = () => {  
  const [requests, setRequests] = useState([
    {
      id: "1",
      name: "Web Development",
      employee: "Zainab Haji",
      image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
      status: "certificate_requested",
    },
    {
      id: "2",
      name: "Project Management",
      employee: "John Doe",
      image: "https://cdn-icons-png.flaticon.com/512/3615/3615942.png",
      status: "certificate_requested",
    },
  ]);

  const approveCertificate = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "certificate_issued" } : req
      )
    );
    Alert.alert("✅ Approved", "Certificate has been issued.");
  };

  const rejectCertificate = (id) => {
    setRequests((prevRequests) =>
      prevRequests.map((req) =>
        req.id === id ? { ...req, status: "certificate_rejected" } : req
      )
    );
    Alert.alert("❌ Rejected", "Certificate request has been denied.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HR Panel - Certificate Requests</Text>

      <FlatList
        data={requests}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.requestCard}>
            <Image source={{ uri: item.image }} style={styles.courseImage} />
            <View style={styles.infoContainer}>
              <Text style={styles.courseName}>{item.name}</Text>
              <Text style={styles.employeeName}>Requested by: {item.employee}</Text>

              {item.status === "certificate_requested" && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.button, styles.approveButton]}
                    onPress={() => approveCertificate(item.id)}
                  >
                    <Text style={styles.buttonText}>Approve</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.button, styles.rejectButton]}
                    onPress={() => rejectCertificate(item.id)}
                  >
                    <Text style={styles.buttonText}>Reject</Text>
                  </TouchableOpacity>
                </View>
              )}

              {item.status === "certificate_issued" && (
                <Text style={styles.issuedText}>✅ Certificate Issued</Text>
              )}

              {item.status === "certificate_rejected" && (
                <Text style={styles.rejectedText}>❌ Certificate Rejected</Text>
              )}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HRPanel;  

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8", padding: 20 },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  requestCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  courseImage: { width: 50, height: 50, borderRadius: 10, marginRight: 15 },
  infoContainer: { flex: 1 },
  courseName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  employeeName: { fontSize: 14, color: "#666", marginBottom: 5 },
  buttonContainer: { flexDirection: "row", marginTop: 10, gap: 10 },
  button: { flex: 1, padding: 10, borderRadius: 5, alignItems: "center" },
  approveButton: { backgroundColor: "#28a745" },
  rejectButton: { backgroundColor: "#dc3545" },
  buttonText: { color: "#fff", fontWeight: "bold" },
  issuedText: { fontSize: 14, color: "#28a745", fontWeight: "bold", marginTop: 5 },
  rejectedText: { fontSize: 14, color: "#dc3545", fontWeight: "bold", marginTop: 5 },
});
