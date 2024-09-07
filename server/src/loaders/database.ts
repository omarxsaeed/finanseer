import mongoose from "mongoose";
import config from "../config";
import { kpis } from "../data";
import KPI from "../api/kpis/kpis.model";

const connectDatabase = async () => {
  try {
    const db = await mongoose.connect(config.MONGO_URL);
    console.log("Database connected");
    // await dropDatabase(db.connection);
    // await seedDatabase(KPI, kpis);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const dropDatabase = async (mongooseConnection: mongoose.Connection) => {
  await mongooseConnection.db.dropDatabase();
};

const seedDatabase = async (model: any, data: any) => {
  model.insertMany(data);
  console.log("Database seeded");
};

export default connectDatabase;
