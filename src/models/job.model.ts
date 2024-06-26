import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      requried: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
    },
    description: {
      type: String,
    },
    tags: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

const Job = mongoose.models.jobs || mongoose.model("jobs", jobSchema);

export { Job };
