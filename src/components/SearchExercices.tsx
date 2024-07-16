import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Button,
  FlatList,
  ScrollView as RNScrollView,
  ScrollView,
} from "react-native";
import SearchBar from "./SearchBar";
import { FetchData, ExerciseOptions } from "../services/api";
import HorizontalSlidingCard from "./HorizontalSlidingCard";
import { CardsImages } from "../utils/cardsImages";
import axios from "axios";

type SearchExerciseProps = {
  search: string;
  setSearch: (text: string) => void;
  setExercises: (exercises: any[]) => void;
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
};

const SearchExercise = ({
  search,
  setSearch,
  setExercises,
  bodyPart,
  setBodyPart,
}: SearchExerciseProps) => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const scrollViewRef = useRef<RNScrollView>(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await axios.get(
        "http://localhost:5000/api/exercises/bodyPartList"
      );
      setBodyParts(["all", ...bodyPartsData.data]);
    };

    fetchExerciseData();
  }, []);

  const submitHandler = async () => {
    if (search) {
      // Implement the search on the backend, celle utilisée ici est une recherche côté client qui n'est pas optimale
      const exercisesData = await axios.get(
        `http://localhost:5000/api/exercises/search/${search}`
      );
      setSearch("");
      setExercises(exercisesData.data);
      scrollViewRef.current?.scrollTo({ y: 1700, animated: true });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <SearchBar
          searchQuery={search}
          setSearchQuery={setSearch}
          onSubmit={submitHandler}
        />
        <Button title="Search exercise" onPress={submitHandler} />
      </View>
      <ScrollView style={styles.scrollView} horizontal>
        <FlatList
          data={CardsImages}
          renderItem={({ item }) => (
            <HorizontalSlidingCard
              title={item.title}
              image={item.image}
              onPress={() => setBodyPart(item.title)}
            />
          )}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.slidingCardsContainer}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  searchArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  slidingCardsContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    marginTop: 20,
    width: "100%",
  },
});

export default SearchExercise;
