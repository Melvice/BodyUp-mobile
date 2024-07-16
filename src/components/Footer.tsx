import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 BodyUp Fitness</Text>
      <Text style={styles.footerText}>Created by: Guimfack Melvice Junior</Text>
      {/* <View style={styles.socialMediaIcons}>
        <TouchableOpacity>
          <Icons name="facebook" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="twitter" size={24} color="#888" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="instagram" size={24} color="#888" />
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 40, // Ajusté pour une meilleure disposition
    backgroundColor: "#f7f7f7",
    borderTopWidth: 1,
    borderTopColor: "#e1e1e1",
    justifyContent: "space-around", // Changé pour 'space-around' pour une meilleure répartition
    alignItems: "center",
    flexDirection: "row", // Utilisez 'row' pour une disposition horizontale
    padding: 10,
  },
  footerText: {
    color: "#888",
    fontSize: 12, // Taille ajustée pour l'harmonie
    paddingHorizontal: 10,
  },
  socialMediaIcons: {
    flexDirection: "row",
    justifyContent: "space-between", // Espace entre les icônes
    width: 120, // Espace fixe pour les icônes de réseaux sociaux
  },
});

export default Footer;
