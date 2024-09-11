export type Workout = {
  workoutId: string; // Maps to `workout_id` in the database
  userId: string; // Maps to `user_id` in the database
  name: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
};
