// import React, { useState, useEffect, useRef } from "react";
// import {
//   View,
//   StyleSheet,
//   FlatList,
//   ScrollView as RNScrollView,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import SearchBar from "./SearchBar";
// import HorizontalSlidingCard from "./HorizontalSlidingCard";
// import { CardsImages } from "../utils/cardsImages";
// import axios from "axios";

// type SearchExerciseProps = {
//   search: string;
//   setSearch: (text: string) => void;
//   setExercises: (exercises: any[]) => void;
//   bodyPart: string;
//   setBodyPart: (bodyPart: string) => void;
// };

// const SearchExercise = ({
//   search,
//   setSearch,
//   setExercises,
//   bodyPart,
//   setBodyPart,
// }: SearchExerciseProps) => {
//   const [bodyParts, setBodyParts] = useState<string[]>([]);
//   const scrollViewRef = useRef<RNScrollView>(null);

//   useEffect(() => {
//     const fetchExerciseData = async () => {
//       try {
//         const bodyPartsData = await axios.get(
//           "http://192.168.2.13:5000/api/exercises/bodyPartList"
//         );
//         setBodyParts(["Full Body", ...bodyPartsData.data]);
//       } catch (error) {
//         console.error("Error fetching exercise data:", error);
//       }
//     };

//     fetchExerciseData();
//   }, []);

//   const submitHandler = async () => {
//     try {
//       if (search) {
//         const exercisesData = await axios.get(
//           `http://192.168.2.13:5000/api/exercises/search/${search}`
//         );
//         setSearch("");
//         setExercises(exercisesData.data);
//         scrollViewRef.current?.scrollTo({ y: 1700, animated: true });
//       }
//     } catch (error) {
//       console.error("Error during search submit:", error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.searchArea}>
//         <SearchBar
//           searchQuery={search}
//           setSearchQuery={setSearch}
//           onSubmit={submitHandler}
//         />
//         <TouchableOpacity style={styles.searchButton} onPress={submitHandler}>
//           <Text style={styles.searchButtonText}>Search</Text>
//         </TouchableOpacity>
//       </View>
//       <RNScrollView
//         ref={scrollViewRef}
//         style={styles.scrollView}
//         showsHorizontalScrollIndicator={true}
//       >
//         <FlatList
//           data={CardsImages}
//           renderItem={({ item }) => (
//             <HorizontalSlidingCard
//               title={item.title}
//               image={item.image}
//               onPress={() => setBodyPart(item.title)}
//             />
//           )}
//           keyExtractor={(item) => item.id}
//           horizontal
//           contentContainerStyle={styles.slidingCardsContainer}
//         />
//       </RNScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     alignItems: "center",
//     backgroundColor: "#f8f9fa",
//   },
//   searchArea: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     marginBottom: 20,
//   },
//   searchButton: {
//     backgroundColor: "black",
//     padding: 10,
//     borderRadius: 15,
//     marginLeft: 10,
//     width: 100,
//     alignItems: "center",
//   },
//   searchButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   slidingCardsContainer: {
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   scrollView: {
//     marginTop: 20,
//     width: "100%",
//   },
// });

// export default SearchExercise;
// import React, { useState, useEffect, useRef } from "react";
// import {
//   FlatList,
//   ScrollView as RNScrollView,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
// } from "react-native";
// import styled from "styled-components/native";
// import SearchBar from "./SearchBar";
// import HorizontalSlidingCard from "./HorizontalSlidingCard";
// import { CardsImages } from "../utils/cardsImages";
// import axios from "axios";

// const SearchExercise = ({
//   search,
//   setSearch,
//   setExercises,
//   bodyPart,
//   setBodyPart,
// }) => {
//   const [bodyParts, setBodyParts] = useState<string[]>([]);
//   const scrollViewRef = useRef<RNScrollView>(null);

//   useEffect(() => {
//     const fetchExerciseData = async () => {
//       try {
//         const bodyPartsData = await axios.get(
//           "http://192.168.2.13:5000/api/exercises/bodyPartList"
//         );
//         setBodyParts(["Full Body", ...bodyPartsData.data]);
//       } catch (error) {
//         console.error("Error fetching exercise data:", error);
//       }
//     };

//     fetchExerciseData();
//   }, []);

//   const submitHandler = async () => {
//     try {
//       if (search) {
//         const exercisesData = await axios.get(
//           `http://192.168.2.13:5000/api/exercises/search/${search}`
//         );
//         setSearch("");
//         setExercises(exercisesData.data);
//         scrollViewRef.current?.scrollTo({ y: 1700, animated: true });
//       }
//     } catch (error) {
//       console.error("Error during search submit:", error);
//     }
//   };

//   return (
//     <Container>
//       <SearchArea>
//         <SearchBar
//           searchQuery={search}
//           setSearchQuery={setSearch}
//           onSubmit={submitHandler}
//         />
//         <SearchButton onPress={submitHandler}>
//           <SearchButtonText>Search</SearchButtonText>
//         </SearchButton>
//       </SearchArea>
//       <StyledScrollView showsHorizontalScrollIndicator={true}>
//         <FlatList
//           data={CardsImages}
//           renderItem={({ item }) => (
//             <HorizontalSlidingCard
//               title={item.title}
//               image={item.image}
//               onPress={() => setBodyPart(item.title)}
//             />
//           )}
//           keyExtractor={(item) => item.id}
//           horizontal
//           contentContainerStyle={{
//             paddingVertical: 10,
//             paddingHorizontal: 10,
//           }}
//         />
//       </StyledScrollView>
//     </Container>
//   );
// };

// const Container = styled.View`
//   flex: 1;
//   padding: 20px;
//   align-items: center;
//   background-color: #f8f9fa;
// `;

// const SearchArea = styled.View`
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   margin-bottom: 20px;
// `;

// const SearchButton = styled.TouchableOpacity`
//   background-color: black;
//   padding: 10px;
//   border-radius: 15px;
//   margin-left: 10px;
//   width: 100px;
//   align-items: center;
// `;

// const SearchButtonText = styled.Text`
//   color: #fff;
//   font-weight: bold;
// `;

// const StyledScrollView = styled.ScrollView`
//   margin-top: 20px;
//   width: 100%;
// `;

// export default SearchExercise;
import React, { useState, useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView as RNScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import SearchBar from "./SearchBar";
import HorizontalSlidingCard from "./HorizontalSlidingCard";
import { CardsImages } from "../utils/cardsImages";
import axios from "axios";
import styled from "styled-components/native";

const SearchExercise = ({
  search,
  setSearch,
  setExercises,
  bodyPart,
  setBodyPart,
}) => {
  const [bodyParts, setBodyParts] = useState<string[]>([]);
  const scrollViewRef = useRef<RNScrollView>(null);

  useEffect(() => {
    const fetchExerciseData = async () => {
      try {
        const bodyPartsData = await axios.get(
          "http://localhost:5000/api/exercises/bodyPartList"
        );
        setBodyParts(["Full Body", ...bodyPartsData.data]);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      }
    };

    fetchExerciseData();
  }, []);

  const submitHandler = async () => {
    try {
      if (search) {
        const exercisesData = await axios.get(
          `http://localhost:5000/api/exercises/search/${search}`
        );
        setSearch("");
        setExercises(exercisesData.data);
        scrollViewRef.current?.scrollTo({ y: 1700, animated: true });
      }
    } catch (error) {
      console.error("Error during search submit:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchArea>
        <SearchBar
          searchQuery={search}
          setSearchQuery={setSearch}
          onSubmit={submitHandler}
        />
        <SearchButton onPress={submitHandler}>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </SearchArea>
      <StyledScrollView showsHorizontalScrollIndicator={true}>
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
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 10,
          }}
        />
      </StyledScrollView>
    </View>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 20px;
  align-items: center;
  background-color: #f8f9fa;
  flex-direction: column;
`;

const SearchArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: black;
  padding: 10px;
  border-radius: 15px;
  margin-left: 10px;
  width: 100px;
  align-items: center;
`;

const SearchButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

const StyledScrollView = styled.ScrollView`
  margin-top: 20px;
  width: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
});

export default SearchExercise;
