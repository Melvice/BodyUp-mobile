// src/screens/ProgressTracker.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ProgressTracker() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Tracker</Text>
      <Text style={styles.text}>Progress tracking will be here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
  },
});

export default ProgressTracker;
