// src/screens/WorkoutPlans.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { getExercises } from "../services/api";

function WorkoutPlans() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Plans</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default WorkoutPlans;
