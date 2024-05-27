// src/screens/Checkout.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  StripeProvider,
  CardField,
  useStripe,
} from "@stripe/stripe-react-native";

function Checkout() {
  const stripe = useStripe();

  const handlePayment = async () => {
    // Logique de paiement
  };

  return (
    <StripeProvider publishableKey="your-publishable-key-here">
      <View style={styles.container}>
        <Text style={styles.title}>Checkout</Text>
        <CardField
          postalCodeEnabled={true}
          placeholder={{
            number: "4242 4242 4242 4242",
          }}
          cardStyle={styles.card}
          style={styles.cardContainer}
        />
        <Button title="Pay" onPress={handlePayment} />
      </View>
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    textColor: "#000000",
  },
  cardContainer: {
    height: 50,
    marginVertical: 30,
  },
});

export default Checkout;
