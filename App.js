import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./src/screens/HomeScreen";
import ProgressTracker from "./src/screens/ProgressTracker";
import WorkoutPlans from "./src/screens/WorkoutPlans";
import NutritionTips from "./src/screens/NutritionTips";
import Footer from "./src/components/Footer";

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
  const [activeTab, setActiveTab] = useState("Home");

  const renderScreen = () => {
    switch (activeTab) {
      case "Home":
        return <HomeScreen />;
      case "Workouts":
        return <WorkoutPlans />;
      case "Progress":
        return <ProgressTracker />;
      case "Nutrition":
        return <NutritionTips />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <LogoTitle />
      <View style={{ flex: 1 }}>{renderScreen()}</View>
      <View style={styles.navBar}>
        {["Home", "Workouts", "Progress", "Nutrition"].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={styles.navItem}
            onPress={() => setActiveTab(tab)}
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
              color={activeTab === tab ? "#4CAF50" : "gray"}
            />
            <Text
              style={activeTab === tab ? styles.activeTabText : styles.tabText}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  logo: {
    width: 70,
    height: 70,
    resizeMode: "contain",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  appName: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "600",
    marginLeft: 10,
  },
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Transparent background
    height: 60,
    position: "sticky",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    alignItems: "center",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.1,
    shadowRadius: 0,
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    elevation: 5,
  },
  tabText: {
    color: "gray",
    fontWeight: "bold",
    fontSize: 14,
  },
  activeTabText: {
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default App;
