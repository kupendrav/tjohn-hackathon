import mongoose, { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      type: String,
      select: false,
    },
    googleId: {
      type: String,
    },
    image: {
      type: String,
    },
    post: [
      {
        type: Schema.Types.ObjectId,
        ref: "posts",
      },
    ],
  },
  { timestamps: true }
);

export const User =
  mongoose.models?.users || mongoose.model("users", userSchema);
