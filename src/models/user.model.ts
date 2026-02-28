import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, select: false },
    role: { type: String, enum: ["individual", "company"], default: "individual" },
    googleId: { type: String },
    image: { type: String },
    skills: [{ type: String }],
    resumeText: { type: String },
  },
  { timestamps: true }
);

export const User =
  mongoose.models?.users || mongoose.model("users", userSchema);
