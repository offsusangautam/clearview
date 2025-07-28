import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // ✅ required here too!

export const connectDB = async () => {
  console.log("✅ MONGO_URI from env inside connectDB:", process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error:`, error.message);
    process.exit(1);
  }
};
