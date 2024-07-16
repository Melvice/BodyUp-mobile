import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

type CardProps = {
  title: string;
  onPress: () => void;
  imageSource?: any;
  style?: any;
  gifUrl?: string;
  equipment: string;
  target: string;
  secondaryMuscles: string[];
};

export const Card = ({
  title,
  onPress,
  imageSource,
  target,
  equipment,
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
        <Text style={styles.detail}>Target: {target}</Text>
        <Text style={styles.detail}>Equipment: {equipment}</Text>
        <Text style={styles.detail}>
          Secondary Muscles: {secondaryMuscles.join(", ")}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,
    backgroundColor: "#ffffff", // Light background for each card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardImage: {
    width: 150,
    height: 150,
    resizeMode: "cover",
  },
  description: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  detail: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  placeholder: {
    width: 150,
    height: 150,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  placeholderText: {
    color: "#666",
  },
});

export default Card;
