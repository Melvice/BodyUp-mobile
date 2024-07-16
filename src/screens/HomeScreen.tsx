// HomeScreen.tsx
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
// import SearchBar from "../components/SearchBar";
// import HorizontalSlidingCard from "../components/HorizontalSlidingCard";
// import { CardsImages } from "../utils/cardsImages";
// import { Card } from "../components/Card";
// import {
//   FetchData,
//   ExerciseOptions,
//   // youtubeSearchOptions,
// } from "../services/api";
import { Exercise } from "../schema/Exercices";
import SearchExercise from "../components/SearchExercices";
import SearchResults from "../components/SearchResults";

const HomeScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState([] as Exercise[]);
  const [bodyPart, setBodyPart] = useState("all");
  const [search, setSearch] = useState("");
  return (
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <SearchExercise
          search={search}
          setSearch={setSearch}
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <View style={styles.section}>
          <Text style={styles.subtitle}>Exercises results</Text>
          <SearchResults
            exercises={exercises}
            bodyPart={bodyPart}
            setExercises={setExercises}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "white", // Light background for a modern theme
  },
  container: {
    flexGrow: 1,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 32,
    color: "#222222", // Dark text for contrast on light background
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  subtitle: {
    fontSize: 24,
    color: "black", // Vibrant color for dynamic look
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  section: {
    marginBottom: 20,
    width: "100%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  horizontalScroll: {
    flexDirection: "row",
  },
  image: {
    resizeMode: "cover",
  },
  slidingCardsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
