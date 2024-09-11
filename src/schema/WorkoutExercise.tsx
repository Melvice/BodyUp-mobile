export type WorkoutExercise = {
  workoutExerciseId: string; // Maps to `workout_exercise_id` in the database
  workoutId: string; // Maps to `workout_id` in the database
  exerciseId: string; // Maps to `exercise_id` in the database
  sets: number;
  reps: number;
  restTimeSec: number;
};
