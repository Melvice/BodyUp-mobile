// // HomeScreen.tsx
// import React, { useState } from "react";
// import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
// // import SearchBar from "../components/SearchBar";
// // import HorizontalSlidingCard from "../components/HorizontalSlidingCard";
// // import { CardsImages } from "../utils/cardsImages";
// // import { Card } from "../components/Card";
// // import {
// //   FetchData,
// //   ExerciseOptions,
// //   // youtubeSearchOptions,
// // } from "../services/api";
// import { Exercise } from "../schema/Exercices";
// import SearchExercise from "../components/SearchExercices";
// import SearchResults from "../components/SearchResults";

// const HomeScreen = ({ navigation }) => {
//   const [exercises, setExercises] = useState([] as Exercise[]);
//   const [bodyPart, setBodyPart] = useState("all");
//   const [search, setSearch] = useState("");
//   return (
//     <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//       <View style={styles.container}>
//         <SearchExercise
//           search={search}
//           setSearch={setSearch}
//           setExercises={setExercises}
//           bodyPart={bodyPart}
//           setBodyPart={setBodyPart}
//         />
//         <View style={styles.section}>
//           <Text style={styles.subtitle}>Exercises results</Text>
//           <SearchResults
//             exercises={exercises}
//             bodyPart={bodyPart}
//             setExercises={setExercises}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     flex: 1,
//     backgroundColor: "white", // Light background for a modern theme
//   },
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     width: "100%",
//   },
//   title: {
//     fontSize: 32,
//     color: "#222222", // Dark text for contrast on light background
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "left",
//   },
//   subtitle: {
//     fontSize: 24,
//     color: "black", // Vibrant color for dynamic look
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },
//   section: {
//     marginBottom: 20,
//     width: "100%",
//   },
//   item: {
//     padding: 10,
//     fontSize: 18,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ccc",
//   },
//   horizontalScroll: {
//     flexDirection: "row",
//   },
//   image: {
//     resizeMode: "cover",
//   },
//   slidingCardsContainer: {
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
// });

// export default HomeScreen;
// HomeScreen.tsx
// import React, { useState } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import { Exercise } from "../schema/Exercices";
// import SearchExercise from "../components/SearchExercices";
// import SearchResults from "../components/SearchResults";

// const HomeScreen = ({ navigation }) => {
//   const [exercises, setExercises] = useState([] as Exercise[]);
//   const [bodyPart, setBodyPart] = useState("all");
//   const [search, setSearch] = useState("");

//   const renderHeader = () => (
//     <View style={styles.headerContainer}>
//       <SearchExercise
//         search={search}
//         setSearch={setSearch}
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//         setBodyPart={setBodyPart}
//       />
//       <Text style={styles.subtitle}>Exercises results</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       ListHeaderComponent={renderHeader}
//       data={exercises}
//       renderItem={({ item }) => (
//         <SearchResults
//           exercises={[item]}
//           bodyPart={bodyPart}
//           setExercises={setExercises}
//         />
//       )}
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "white", // Light background for a modern theme
//   },
//   headerContainer: {
//     marginBottom: 20,
//     width: "100%",
//   },
//   subtitle: {
//     fontSize: 24,
//     color: "black", // Vibrant color for dynamic look
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });

// export default HomeScreen;
// import React, { useState } from "react";
// import { View, Text, StyleSheet, FlatList } from "react-native";
// import { Exercise } from "../schema/Exercices";
// import SearchExercise from "../components/SearchExercices";
// import SearchResults from "../components/SearchResults";
// const HomeScreen = ({ navigation }) => {
//   const [exercises, setExercises] = useState([] as Exercise[]);
//   const [bodyPart, setBodyPart] = useState("Full Body");
//   const [search, setSearch] = useState("");

//   const renderHeader = () => (
//     <View style={styles.headerContainer}>
//       <SearchExercise
//         search={search}
//         setSearch={setSearch}
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//         setBodyPart={setBodyPart}
//       />
//       <Text style={styles.subtitle}>Exercises results</Text>
//     </View>
//   );

//   return (
//     <FlatList
//       ListHeaderComponent={renderHeader}
//       data={[{ key: "searchResults" }]} // Dummy data to render SearchResults as a single item
//       renderItem={() => (
//         <SearchResults
//           exercises={exercises}
//           bodyPart={bodyPart}
//           setExercises={setExercises}
//         />
//       )}
//       keyExtractor={(item) => item.key}
//       contentContainerStyle={styles.container}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     padding: 20,
//     backgroundColor: "#f8f9fa",
//   },
//   headerContainer: {
//     marginBottom: 20,
//     width: "100%",
//   },
//   subtitle: {
//     fontSize: 24,
//     color: "black", // Vibrant color for dynamic look
//     fontWeight: "bold",
//     marginBottom: 15,
//     textAlign: "center",
//   },
// });

// export default HomeScreen;
import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Exercise } from "../schema/Exercices";
import SearchExercise from "../components/SearchExercices";
import SearchResults from "../components/SearchResults";

const HomeScreen = ({ navigation }) => {
  const [exercises, setExercises] = useState([] as Exercise[]);
  const [bodyPart, setBodyPart] = useState("Full Body");
  const [search, setSearch] = useState("");

  const renderHeader = () => (
    <HeaderContainer>
      <SearchExercise
        search={search}
        setSearch={setSearch}
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Subtitle>Exercises results</Subtitle>
    </HeaderContainer>
  );

  return (
    <StyledFlatList
      ListHeaderComponent={renderHeader}
      data={[{ key: "searchResults" }]}
      renderItem={() => (
        <SearchResults
          exercises={exercises}
          bodyPart={bodyPart}
          setExercises={setExercises}
        />
      )}
      // keyExtractor={(item) => item.key}
    />
  );
};

const HeaderContainer = styled.View`
  margin-bottom: 20px;
  width: 100%;
`;

const Subtitle = styled.Text`
  font-size: 24px;
  color: black;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
`;

const StyledFlatList = styled.FlatList`
  flex-grow: 1;
  padding: 20px;
  background-color: #f8f9fa;
`;

export default HomeScreen;
