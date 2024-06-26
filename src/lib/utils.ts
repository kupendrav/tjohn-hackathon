import { type ClassValue, clsx } from "clsx";
import mongoose from "mongoose";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const connectToDB = async () => {
  try {
    if (mongoose.connections && mongoose.connections[0].readyState) return;
    const connection = await mongoose.connect(process.env.DB_URI as string);
    console.log(connection.connection.host, " Connected successfully ✅");
  } catch (error) {
    console.log(`❌❌❌ Mongodb connection error ${error}`);
    process.exit(1);
  }
};
