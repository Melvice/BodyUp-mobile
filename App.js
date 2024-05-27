import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import ProgressTracker from "./src/screens/ProgressTracker";
import { Image, StyleSheet } from "react-native";
import NutritionTips from "./src/screens/NutritionTips";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      source={require("./src/assets/BodyUpLogo.png")}
      style={styles.logo}
    />
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "black",
          },
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitle: () => <LogoTitle />, 
          headerTitleContainerStyle: {
            alignItems: "left",
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProgressTracker" component={ProgressTracker} />
        <Stack.Screen name="NutritionTips" component={NutritionTips} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 150,
    height: 40,
    resizeMode: "contain",
  },
});

export default App;
