import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
// import { FetchData, ExerciseOptions } from "../services/api";
import Card from "./Card";
import axios from "axios";
import { Exercise } from "../schema/Exercices";

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
    : ([].slice(indexOfFirstExercise, indexOfLastExercise) as Exercise[]);
  useEffect(() => {
    const fetchExerciseData = async () => {
      // let ExerciseData = [];
      const url =
        bodyPart === "all"
          ? "http://localhost:5000/api/exercises"
          : `http://localhost:5000/api/exercises/bodyPart/${bodyPart}`;
      const response = await axios.get(url);
      setExercises(response.data);
      console.log(response.data);
      // ExerciseData = await FetchData(url, ExerciseOptions);
      if (bodyPart !== "all" && currentPage !== 1) {
        setCurrentPage(1);
      }
      setExercises(response.data);
    };
    fetchExerciseData();
  }, [bodyPart]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} id="exercise">
      <Text style={styles.title}>Showing Exercises Results</Text>
      <View style={styles.cardContainer}>
        {currentExercises.map((exercise, index) => (
          <Card
            key={index}
            title={exercise.name}
            onPress={() => (window.location.href = `/exercise/${exercise.id}`)}
            imageSource={undefined}
            gifUrl={exercise.gifurl}
            style={undefined}
            equipment={exercise.equipment}
            target={exercise.target}
            secondaryMuscles={exercise.secondarymuscles}
          />
        ))}
      </View>
      {exercises.length > ExercisePerPage && (
        <Pagination
          totalExercises={exercises.length}
          exercisesPerPage={ExercisePerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#343a40",
  },
  cardContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
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
});

export default SearchResults;
// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   FlatList,
//   StyleSheet,
//   TouchableOpacity,
// } from "react-native";
// import axios from "axios";
// import Card from "./Card";
// type ExercisesProps = {
//   exercises: any[];
//   bodyPart: string;
//   setExercises: (exercises: any[]) => void;
// };
// const SearchResults = (
//   { exercises , bodyPart, setExercises }: ExercisesProps
// ) => {
//   // const [exercises, setExercises] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const ExercisePerPage = 9;

//   useEffect(() => {
//     const fetchExerciseData = async () => {
//       const response = await axios.get("http://localhost:5000/api/exercises");
//       setExercises(response.data);
//     };
//     fetchExerciseData();
//   }, []);

//   const renderExerciseCard = ({ item }) => (
//     <Card
//       // key={index}
//       title={item.name}
//       onPress={() => (window.location.href = `/exercise/${item.id}`)}
//       imageSource={undefined}
//       gift={item.gifUrl}
//       style={undefined}
//       equipment={item.equipment}
//       target={item.target}
//       secondaryMuscles={item.secondaryMuscles}
//     />
//   );

//   const totalPages = Math.ceil(exercises.length / ExercisePerPage);
//   const currentExercises = exercises.slice(
//     (currentPage - 1) * ExercisePerPage,
//     currentPage * ExercisePerPage
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Showing Exercises Results</Text>
//       <FlatList
//         data={currentExercises}
//         renderItem={renderExerciseCard}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={2}
//         contentContainerStyle={styles.cardContainer}
//       />
//       {exercises.length > ExercisePerPage && (
//         <View style={styles.pagination}>
//           {Array.from({ length: totalPages }).map((_, index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.pageButton,
//                 currentPage === index + 1 && styles.activePageButton,
//               ]}
//               onPress={() => setCurrentPage(index + 1)}
//             >
//               <Text
//                 style={[
//                   styles.pageButtonText,
//                   currentPage === index + 1 && styles.activePageButtonText,
//                 ]}
//               >
//                 {index + 1}
//               </Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     paddingVertical: 20,
//     paddingHorizontal: 10,
//     alignItems: "center",
//     width: "100%",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: 20,
//   },
//   cardContainer: {
//     width: "100%",
//     justifyContent: "space-between",
//   },
//   pagination: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 20,
//   },
//   pageButton: {
//     marginHorizontal: 5,
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "#E0E0E0",
//   },
//   activePageButton: {
//     backgroundColor: "#007BFF",
//   },
//   pageButtonText: {
//     color: "#000",
//   },
//   activePageButtonText: {
//     color: "#FFF",
//   },
// });

// export default SearchResults;
