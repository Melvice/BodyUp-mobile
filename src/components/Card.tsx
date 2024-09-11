// import React from "react";
// import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
// import { FontAwesome5 } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";

// type CardProps = {
//   title: string;
//   onPress: () => void;
//   imageSource?: any;
//   style?: any;
//   gifUrl?: string;
//   target: string;
//   secondaryMuscles: string[];
// };

// export const Card = ({
//   title,
//   onPress,
//   imageSource,
//   target,
//   secondaryMuscles,
//   style,
//   gifUrl,
// }: CardProps) => {
//   return (
//     <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
//       {gifUrl ? (
//         <Image source={{ uri: gifUrl }} style={styles.cardImage} />
//       ) : (
//         <View style={styles.placeholder}>
//           <Text style={styles.placeholderText}>No Image</Text>
//         </View>
//       )}
//       <View style={styles.description}>
//         <Text style={styles.title}>{title}</Text>
//         <View style={styles.musclesContainer}>
//           <View style={styles.targetContainer}>
//             <FontAwesome5 name="bullseye" size={20} color="#fff" />
//             <Text style={styles.muscleText}>{target}</Text>
//           </View>
//           <View style={styles.secondaryContainer}>
//             <FontAwesome5 name="dumbbell" size={20} color="#fff" />
//             <Text style={styles.muscleText}>{secondaryMuscles.join(", ")}</Text>
//           </View>
//         </View>
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity style={styles.button} onPress={onPress}>
//             <Text style={styles.buttonText}>Add Exercise</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     flexDirection: "row",
//     width: "100%",
//     borderRadius: 15,
//     overflow: "hidden",
//     marginBottom: 20,
//     backgroundColor: "#ffffff",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 10,
//     elevation: 5,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     minWidth: 400,
//   },
//   cardImage: {
//     width: 150,
//     height: 150,
//     borderTopLeftRadius: 15,
//     borderBottomLeftRadius: 15,
//   },
//   description: {
//     flex: 1,
//     padding: 15,
//     justifyContent: "space-between",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 10,
//   },
//   musclesContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 10,
//   },
//   targetContainer: {
//     flex: 1,
//     backgroundColor: "#4CAF50", // Green color for target muscle
//     padding: 10,
//     borderRadius: 8,
//     marginRight: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   secondaryContainer: {
//     flex: 1,
//     backgroundColor: "#03A9F4", // Blue color for secondary muscles
//     padding: 10,
//     borderRadius: 8,
//     marginLeft: 5,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   muscleText: {
//     fontSize: 14,
//     color: "#fff",
//     textAlign: "center",
//     marginTop: 5,
//   },
//   buttonContainer: {
//     alignItems: "center",
//     marginTop: 10,
//   },
//   button: {
//     backgroundColor: "black", // Vibrant orange color for the button
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   placeholder: {
//     width: 150,
//     height: 150,
//     backgroundColor: "#f0f0f0",
//     justifyContent: "center",
//     alignItems: "center",
//     borderTopLeftRadius: 15,
//     borderBottomLeftRadius: 15,
//   },
//   placeholderText: {
//     color: "#a0a0a0",
//   },
// });

// export default Card;
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons"; // Importing FontAwesome icons for muscle categories

type CardProps = {
  title: string;
  onPress: () => void;
  imageSource?: any;
  style?: any;
  gifUrl?: string;
  target: string;
  secondaryMuscles: string[];
};

export const Card = ({
  title,
  onPress,
  imageSource,
  target,
  secondaryMuscles,
  style,
  gifUrl,
}: CardProps) => {
  return (
    <TouchableOpacity style={[styles.card, style]} onPress={onPress}>
      {gifUrl ? (
        <Image source={{ uri: gifUrl }} style={styles.cardImage} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.musclesContainer}>
          <View style={styles.targetContainer}>
            <FontAwesome5 name="bullseye" size={24} color="#fff" />
            <Text style={styles.muscleText}>{target}</Text>
          </View>
          <View style={styles.secondaryContainer}>
            <FontAwesome5 name="dumbbell" size={24} color="#fff" />
            <Text style={styles.muscleText}>{secondaryMuscles.join(", ")}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    minWidth: 330,
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#2E2E2E",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    borderColor: "#444",
    borderWidth: 1,
  },
  cardImage: {
    width: 150,
    height: "100%",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  description: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 10,
  },
  musclesContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  targetContainer: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: 70,
  },
  secondaryContainer: {
    backgroundColor: "#FFA500",
    padding: 10,
    borderRadius: 8,
    marginLeft: 5,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    minWidth: 70,
  },
  muscleText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
    marginTop: 5,
  },
  placeholder: {
    width: 150,
    height: 150,
    backgroundColor: "#444",
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  placeholderText: {
    color: "#a0a0a0",
  },
});

export default Card;
