import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Platform,
} from "react-native";

function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/HomePage.webp")}
      style={styles.background}
      imageStyle={Platform.OS === "web" ? styles.webImage : styles.image}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Fitness App!</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("WorkoutPlans")}
          >
            <Text style={styles.buttonText}>Workout Plans</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("ProgressTracker")}
          >
            <Text style={styles.buttonText}>Progress Tracker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("NutritionTips")}
          >
            <Text style={styles.buttonText}>Nutrition Tips</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  image: {
    resizeMode: "cover",
  },
  webImage: {
    objectFit: "cover", // CSS property for the web
    width: "100vw", // Cover the full view width
    height: "100vh", // Cover the full view height
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    color: "#fff",
    marginBottom: 40,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "80%",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#1E90FF",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default HomeScreen;
