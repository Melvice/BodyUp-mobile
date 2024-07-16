// SlidingCard.tsx
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

type HorizontalSlidingCardProps = {
  title: string;
  image: any;
  onPress: () => void;
};

const HorizontalSlidingCard = ({
  title,
  image,
  onPress,
}: HorizontalSlidingCardProps) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    marginRight: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});

export default HorizontalSlidingCard;
