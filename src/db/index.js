import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`Connected to DB: ${connectionInstance.connection.host}`);
  } catch {
    console.error("Error connecting to DB", error);
    process.exit(1);
  }
};

export default connectDB;