import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Card from "./Card";
import axios from "axios";
import { Exercise } from "../schema/Exercices";
import { useNavigation } from "@react-navigation/native";

type ExercisesProps = {
  exercises: any[];
  bodyPart: string;
  setExercises: (exercises: any[]) => void;
};

const Pagination = ({
  totalExercises,
  exercisesPerPage,
  paginate,
  currentPage,
}) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const pagesPerGroup = 5;

  useEffect(() => {
    const totalPages = Math.ceil(totalExercises / exercisesPerPage);
    const newPageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [totalExercises, exercisesPerPage]);

  const renderPageNumbers = () => {
    const totalPages = pageNumbers.length;
    const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup);
    const startPage = currentGroup * pagesPerGroup + 1;
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

    const pageLinks = [];

    if (startPage > 1) {
      pageLinks.push(
        <TouchableOpacity key="first" onPress={() => paginate(1)}>
          <Text style={styles.pageLink}>First</Text>
        </TouchableOpacity>,
        <Text key="ellipsis1" style={styles.ellipsis}>
          ...
        </Text>
      );
    }

    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <TouchableOpacity key={i} onPress={() => paginate(i)}>
          <Text
            style={[
              styles.pageLink,
              i === currentPage ? styles.activePage : null,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    if (endPage < totalPages) {
      pageLinks.push(
        <Text key="ellipsis2" style={styles.ellipsis}>
          ...
        </Text>,
        <TouchableOpacity key="last" onPress={() => paginate(totalPages)}>
          <Text style={styles.pageLink}>Last</Text>
        </TouchableOpacity>
      );
    }

    return pageLinks;
  };

  return (
    <View style={styles.pagination}>
      {currentPage > 1 && (
        <TouchableOpacity onPress={() => paginate(currentPage - 1)}>
          <Text style={styles.pageLink}>« Previous</Text>
        </TouchableOpacity>
      )}
      {renderPageNumbers()}
      {currentPage < pageNumbers.length && (
        <TouchableOpacity onPress={() => paginate(currentPage + 1)}>
          <Text style={styles.pageLink}>Next »</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const SearchResults = ({
  exercises = [],
  bodyPart,
  setExercises,
}: ExercisesProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const ExercisePerPage = 9;
  const indexOfLastExercise = currentPage * ExercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - ExercisePerPage;
  const currentExercises = Array.isArray(exercises)
    ? exercises.slice(indexOfFirstExercise, indexOfLastExercise)
    : ([] as Exercise[]).slice(indexOfFirstExercise, indexOfLastExercise);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const url =
          bodyPart === "Full Body"
            ? "http://localhost:5000/api/exercises"
            : `http://localhost:5000/api/exercises/bodyPart/${bodyPart}`;
        const response = await axios.get(url);
        setExercises(response.data);
        if (bodyPart !== "Full Body" && currentPage !== 1) {
          setCurrentPage(1);
        }
        setExercises(response.data);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };
    fetchExerciseData();
  }, [bodyPart]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const navigation = useNavigation();

  const handlePress = (exercise) => {
    navigation.navigate("ExerciseDetails", { exercise });
  };
  const renderItem = ({ item }) => (
    <Card
      key={item.id}
      title={item.name}
      onPress={() => handlePress(item)}
      imageSource={undefined}
      gifUrl={`http://localhost:5000/api/cached-images/${item.cachedgifurl}`}
      style={styles.cardStyle}
      target={item.target}
      secondaryMuscles={item.secondarymuscles}
    />
  );

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={currentExercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.cardContainer}
        ListFooterComponent={
          exercises.length > ExercisePerPage && (
            <Pagination
              totalExercises={exercises.length}
              exercisesPerPage={ExercisePerPage}
              paginate={paginate}
              currentPage={currentPage}
            />
          )
        }
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: "#f8f9fa",
  },
  row: {
    justifyContent: "space-between",
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  cardStyle: {
    flex: 1,
    margin: 10,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  pageLink: {
    marginHorizontal: 5,
    padding: 10,
    fontSize: 16,
    color: "#007bff",
    borderWidth: 1,
    borderColor: "#dee2e6",
    borderRadius: 4,
    backgroundColor: "#ffffff",
  },
  activePage: {
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#007bff",
  },
  ellipsis: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: "#6c757d",
  },
  separator: {
    height: 20,
  },
});

export default SearchResults;
