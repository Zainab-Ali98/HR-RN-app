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
    Dimensions,
    ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';

const { width } = Dimensions.get('window'); // Get screen width

const Home = () => {
    const navigation = useNavigation();
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [searchQuery, setSearchQuery] = useState("");

    const [departments] = useState([
        { name: "IT", image: "https://cdn-icons-png.flaticon.com/512/2721/2721293.png" },
        { name: "Finance", image: "https://cdn-icons-png.flaticon.com/512/2332/2332289.png" },
        { name: "Management", image: "https://cdn-icons-png.flaticon.com/512/3462/3462117.png" },
    ]);

    const [courses] = useState([
        {
            name: "Web Development",
            department: "IT",
            image: "https://cdn-icons-png.flaticon.com/512/1055/1055666.png",
            description: "Learn HTML, CSS, and JavaScript to build modern websites.",
            category: "Programming",
            duration: "8",
        },
        {
            name: "Cybersecurity",
            department: "IT",
            image: "https://cdn-icons-png.flaticon.com/512/3067/3067556.png",
            description: "Become an expert in online security and ethical hacking.",
            category: "Security",
            duration: "12",
        },
        {
            name: "Accounting",
            department: "Finance",
            image: "https://cdn-icons-png.flaticon.com/512/2581/2581987.png",
            description: "Master financial statements and budgeting strategies.",
            category: "Finance",
            duration: "6",
        },
    ]);

    const searchedCourses = courses.filter(
        (course) =>
            course.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedDepartment === "" || course.department === selectedDepartment)
    );

    return (
        <LinearGradient colors={['black', 'grey']} style={styles.container}>
            <SafeAreaView>
               
                <ScrollView contentContainerStyle={styles.scrollView}>
                    <View style={styles.header}>
                        <Text style={styles.headerTitle}>Find Your Perfect Course</Text>
                        <FontAwesome5 name="graduation-cap" size={24} color="#fff" />
                    </View>

                    <TextInput
                        style={styles.searchBar}
                        placeholder="🔍 Search for courses..."
                        placeholderTextColor="#ddd"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />

                    <Text style={styles.sectionTitle}>Explore Departments</Text>
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

                    <Text style={styles.sectionTitle}>Available Courses</Text>
                    <FlatList
                        data={searchedCourses}
                        numColumns={2}
                        scrollEnabled={false} 
                        contentContainerStyle={styles.courseList}
                        columnWrapperStyle={styles.courseRow}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.courseCard}
                                onPress={() => navigation.navigate("CourseDetails", { course: item })}
                            >
                                <Image source={{ uri: item.image }} style={styles.courseImage} />
                                <Text style={styles.courseName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.name}
                    />
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        paddingBottom: 30, 
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    searchBar: {
        height: 50,
        borderColor: 'rgba(255, 255, 255, 0.3)',
        borderWidth: 1,
        paddingHorizontal: 20,
        borderRadius: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        fontSize: 16,
        color: '#fff',
        marginBottom: 30,
        marginHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    departmentList: {
        paddingBottom: 20,
        paddingHorizontal: 20,
    },
    departmentItem: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 20,
        padding: 15,
        width: 120,
        height: 120,
        marginRight: 15,
    },
    departmentSelected: {
        backgroundColor: '#FF8C42',
    },
    departmentImage: {
        width: 60,
        height: 60,
        marginBottom: 8,
    },
    departmentText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    },
    courseList: {
        paddingBottom: 30,
        paddingHorizontal: 20,
    },
    courseRow: {
        justifyContent: 'space-between',
    },
    courseCard: {
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        padding: 20,
        marginBottom: 15,
        width: (width - 60) / 2, 
        alignItems: 'center',
    },
    courseImage: {
        width: 80,
        height: 80,
        marginBottom: 10,
    },
    courseName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    },
});
