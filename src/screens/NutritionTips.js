// src/screens/NutritionTips.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function NutritionTips() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nutrition Tips</Text>
      <Text style={styles.text}>Nutrition tips will be here!</Text>
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

export default NutritionTips;
