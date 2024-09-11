import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Picker,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";

const NutritionTips = ({ navigation }) => {
  const [dietaryPrefs, setDietaryPrefs] = useState("Vegan");
  const [goal, setGoal] = useState("Weight loss");
  const [planType, setPlanType] = useState("Daily");
  const [caloricIntake, setCaloricIntake] = useState("");
  const [proteins, setProteins] = useState("");
  const [fats, setFats] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [allergies, setAllergies] = useState("");
  const [mealsFrequency, setMealsFrequency] = useState("");
  const [mealPlans, setMealPlans] = useState([]);

  const generateMealPlan = async () => {
    if (mealPlans.length >= 3) {
      Alert.alert("Limit Reached", "You can only generate up to 3 meal plans.");
      return;
    }

    try {
      const requestData = {
        dietry_prefs: dietaryPrefs,
        goal: goal,
        plan_type: planType,
        caloric_intake: caloricIntake,
        proteins: proteins,
        fats: fats,
        carbohydrates: carbohydrates,
        allergies_or_restrictions: allergies,
        meals_frequency: mealsFrequency,
      };

      console.log("Request Data:", requestData);

      const response = await axios.post(
        "http://localhost:5000/api/generateMealPlan",
        requestData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const newMealPlan = {
        id: mealPlans.length + 1,
        dietaryPrefs,
        goal,
        planType,
        caloricIntake,
        proteins,
        fats,
        carbohydrates,
        allergies,
        mealsFrequency,
        planData: response.data, // Assuming the API returns the meal plan in the response data
      };

      setMealPlans([...mealPlans, newMealPlan]);
    } catch (error) {
      console.error("Error generating meal plan:", error);
      Alert.alert("Error", "Failed to generate meal plan. Please try again.");
    }
  };

  const deleteMealPlan = (id) => {
    setMealPlans(mealPlans.filter((plan) => plan.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Generate Your Meal Plan</Text>
      <View style={styles.inputGroup}>
        <Picker
          selectedValue={dietaryPrefs}
          onValueChange={(itemValue) => setDietaryPrefs(itemValue)}
          style={styles.picker}
        >
          {[
            "Vegan",
            "Non-Veg",
            "Paleo",
            "Keto",
            "Gluten-free",
            "Veg+Non-Veg",
            "Mix",
          ].map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
        <Picker
          selectedValue={goal}
          onValueChange={(itemValue) => setGoal(itemValue)}
          style={styles.picker}
        >
          {[
            "Weight loss",
            "Weight gain",
            "muscle gain",
            "strength maintenance",
            "heart health",
            "digestive health",
            "diabetes management",
          ].map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
        <Picker
          selectedValue={planType}
          onValueChange={(itemValue) => setPlanType(itemValue)}
          style={styles.picker}
        >
          {["Daily", "Weekly"].map((option) => (
            <Picker.Item label={option} value={option} key={option} />
          ))}
        </Picker>
      </View>
      <TextInput
        placeholder="Caloric Intake"
        value={caloricIntake}
        onChangeText={setCaloricIntake}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Protein Amount"
        value={proteins}
        onChangeText={setProteins}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Fats Amount"
        value={fats}
        onChangeText={setFats}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Carbohydrates Amount"
        value={carbohydrates}
        onChangeText={setCarbohydrates}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Allergies or Restrictions"
        value={allergies}
        onChangeText={setAllergies}
        style={styles.input}
      />
      <TextInput
        placeholder="Meals Per Day"
        value={mealsFrequency}
        onChangeText={setMealsFrequency}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Generate Meal Plan" onPress={generateMealPlan} />
      <Text style={styles.subtitle}>Your Meal Plans</Text>
      <FlatList
        data={mealPlans}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.mealPlan}>
            <Text style={styles.mealPlanText}>
              {item.dietaryPrefs} - {item.goal}
            </Text>
            <Text style={styles.mealPlanText}>
              Caloric Intake: {item.caloricIntake}
            </Text>
            <Text style={styles.mealPlanText}>
              Proteins: {item.proteins}g, Fats: {item.fats}g, Carbs:{" "}
              {item.carbohydrates}g
            </Text>
            <TouchableOpacity onPress={() => deleteMealPlan(item.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f0f2f5",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputGroup: {
    marginBottom: 20,
  },
  picker: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  input: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 2,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: "#333",
  },
  mealPlan: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  mealPlanText: {
    fontSize: 18,
    color: "#555",
  },
  deleteButton: {
    color: "#d9534f",
    marginTop: 10,
    fontSize: 16,
    textAlign: "right",
  },
});

export default NutritionTips;
// {
//   "dietry_prefs": "Vegan",
//   "goal": "Weight loss",
//   "caloric_intake": 2000,
//   "proteins": 200,
//   "fats": 50,
//   "carbohydrates": 500,
//   "allergies_or_restrictions": "allergic to red vegetables",
//   "plan_type": "Daily",
//   "meals_frequency": 4
// }
