export type User = {
  userId: string; // Maps to `user_id` in the database
  username: string;
  email: string;
  passwordHash: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  age?: number;
  heightCm?: number;
  weightKg?: number;
  goal?: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};
