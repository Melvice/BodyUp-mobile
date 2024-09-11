export type Meal = {
  mealId: string; // Maps to `meal_id` in the database
  mealPlanId: string; // Maps to `meal_plan_id` in the database
  recipe: string;
  time: string;
  ingredients: string;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
};
