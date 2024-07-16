// src/screens/NutritionTips.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function WorkoutCategories() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Categories</Text>
      <Text style={styles.text}>Workout categories will be here!</Text>
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

export default WorkoutCategories;
