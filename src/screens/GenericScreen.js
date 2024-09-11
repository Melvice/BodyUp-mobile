import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from "react-native";

const GenericScreen = ({ navigation, title, content }) => {
  return (
    <ImageBackground
      source={require("../assets/HomePage.webp")}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.heroSection}>
            <Text style={styles.heroText}>{title}</Text>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.getStartedText}>Go Home</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentSection}>{content}</View>
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              © 2023 BodyUp. All rights reserved.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent light overlay
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heroSection: {
    width: "100%",
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
    marginBottom: 20,
  },
  heroText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333", // Dark text color
    textAlign: "center",
  },
  getStartedButton: {
    backgroundColor: "#4CAF50", // Accent color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  getStartedText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff", // White text for the button
  },
  contentSection: {
    width: "100%",
    padding: 20,
    alignItems: "center",
  },
  footer: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  footerText: {
    fontSize: 14,
    color: "#999",
  },
});

export default GenericScreen;
