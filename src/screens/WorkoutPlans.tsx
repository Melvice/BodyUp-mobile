// src/screens/WorkoutPlans.js
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
// import { getExercises } from "../services/api";
import {
  FetchData,
  ExerciseOptions,
  // youtubeSearchOptions,
} from "../services/api";

function WorkoutPlans() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    // const fetchExercises = async () => {
    //   try {
    //     const data = await getExercises();
    //     setExercises(data);
    //   } catch (error) {
    //     console.error("Error fetching exercises:", error);
    //   }
    // };
    const fetchExercisesData = async () => {
      const exerciseDBURL = "https://exercisedb.p.rapidapi.com";

      const ExerciseDetailData = await FetchData(
        `${exerciseDBURL}/exercises?limit=50&offset=0`,
        ExerciseOptions
      );
      console.log(ExerciseDetailData);
      setExercises(ExerciseDetailData);

      const targetMuscleExercisesData = await FetchData(
        `${exerciseDBURL}/exercises/target/${ExerciseDetailData.target}`,
        ExerciseOptions
      );
      // setTargetMuscleExercises(targetMuscleExercisesData);
      // const equipmentExercisesData = await FetchData(
      //   `${exerciseDBURL}/exercises/equipment/${ExerciseDetailData.equipment}`,
      //   ExerciseOptions
      // );
      // setEquipmentExercises(equipmentExercisesData);
    };

    // fetchExercises();
    fetchExercisesData();
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
