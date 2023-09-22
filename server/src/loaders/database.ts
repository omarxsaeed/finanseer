import mongoose from "mongoose";
import config from "../config";

const connectDatabase = async () => {
  try {
    await mongoose.connect(config.MONGO_URL);
    console.log("Database connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDatabase;
