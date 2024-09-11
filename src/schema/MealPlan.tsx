export type MealPlan = {
  mealPlanId: string; // Maps to `meal_plan_id` in the database
  userId: string; // Maps to `user_id` in the database
  name: string;
  createdAt: Date;
  updatedAt: Date;
};
