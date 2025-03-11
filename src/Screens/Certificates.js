import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Temporary mock data - replace with actual API data later
const mockCertificates = [
  {
    id: "1",
    name: "React Native Development",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-15",
    issuer: "React Training Academy",
    status: "Valid",
  },
  {
    id: "2",
    name: "JavaScript Advanced",
    issueDate: "2023-11-20",
    expiryDate: "2026-11-20",
    issuer: "JavaScript Institute",
    status: "Valid",
  },
];

const CertificateCard = ({ certificate }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <Icon name="verified" size={24} color="#4CAF50" />
        <Text style={styles.certificateName}>{certificate.name}</Text>
      </View>
      <View style={styles.cardContent}>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Issuer:</Text>
          <Text style={styles.value}>{certificate.issuer}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Issue Date:</Text>
          <Text style={styles.value}>{certificate.issueDate}</Text>
        </View>
       
        <View
          style={[
            styles.statusContainer,
            {
              backgroundColor:
                certificate.status === "Valid" ? "#E8F5E9" : "#FFEBEE",
            },
          ]}
        >
          <Text
            style={[
              styles.status,
              { color: certificate.status === "Valid" ? "#2E7D32" : "#C62828" },
            ]}
          >
            {certificate.status}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Certificates = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Certificates</Text>
      </View>
      <FlatList
        data={mockCertificates}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CertificateCard certificate={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  listContainer: {
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  certificateName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginLeft: 8,
    flex: 1,
  },
  cardContent: {
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#666666",
    flex: 1,
  },
  value: {
    fontSize: 14,
    color: "#333333",
    flex: 2,
  },
  statusContainer: {
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginTop: 8,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default Certificates;
