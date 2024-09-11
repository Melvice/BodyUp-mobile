export type UserProgress = {
  progressId: string; // Maps to `progress_id` in the database
  userId: string; // Maps to `user_id` in the database
  date: string; // Could also use `Date` type depending on how dates are handled
  weightKg?: number;
  workoutId?: string; // Optional, if tracking progress for a specific workout
  exerciseId?: string; // Optional, if tracking progress for a specific exercise
  sets?: number;
  reps?: number;
  notes?: string;
  createdAt: Date;
};
