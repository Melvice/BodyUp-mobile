import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ExerciseDetails from "./src/screens/ExerciceDetail";
import ProgressTracker from "./src/screens/ProgressTracker";
import WorkoutPlans from "./src/screens/WorkoutPlans";
import NutritionTips from "./src/screens/NutritionTips";
import LandingPage from "./src/screens/LandingPage";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.topBar}>
      <Image
        source={require("./src/assets/BodyUpLogo.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>BodyUp</Text>
    </View>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState("Landing");

  function CustomHeader({ navigation, activeTab, setActiveTab }) {
    return (
      <View style={styles.navBar}>
        <View style={styles.navLinks}>
          {["Home", "Workouts", "Progress", "Nutrition"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.navItem,
                activeTab === tab && styles.activeNavItem,
              ]}
              onPress={() => {
                setActiveTab(tab);
                navigation.navigate(tab);
              }}
            >
              <Ionicons
                name={
                  tab === "Home"
                    ? "home"
                    : tab === "Progress"
                    ? "stats-chart"
                    : tab === "Workouts"
                    ? "fitness"
                    : "nutrition"
                }
                size={20}
                color={activeTab === tab ? "#FFD700" : "#B0B0B0"}
              />
              <Text
                style={
                  activeTab === tab ? styles.activeTabText : styles.tabText
                }
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <LogoTitle />
        <Stack.Navigator
          initialRouteName={activeTab}
          screenOptions={({ navigation }) => ({
            header: (props) => (
              <CustomHeader
                navigation={navigation}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                {...props}
              />
            ),
            headerStyle: {
              backgroundColor: "#333",
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 3.84,
              elevation: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#444",
            },
            headerTitleStyle: {
              color: "#FFD700",
              fontWeight: "bold",
              fontSize: 18,
            },
          })}
        >
          <Stack.Screen
            name="Landing"
            component={LandingPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Workouts" component={WorkoutPlans} />
          <Stack.Screen name="Progress" component={ProgressTracker} />
          <Stack.Screen name="Nutrition" component={NutritionTips} />
          <Stack.Screen name="ExerciseDetails" component={ExerciseDetails} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e", // Dark background
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  appName: {
    color: "#FFD700",
    fontSize: 26,
    fontWeight: "600",
    marginLeft: 10,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "#B0B0B0",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
  navBar: {
    backgroundColor: "#2c2c2e",
    paddingHorizontal: 20,
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    paddingBottom: 10,
  },
  navLinks: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  navItem: {
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 5,
  },
  activeNavItem: {
    backgroundColor: "#444", // Darker background for the active item
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  activeTabText: {
    color: "#FFD700",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default App;
