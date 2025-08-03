import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import cors from 'cors';
import mongoose from 'mongoose';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/products", productRoutes);
app.use(authRoutes); 

// Basic test route
app.get("/", (req, res) => {
  res.send("ClearView API is running");
});

// Start server with DB connect
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on http://localhost:5000"));
  })
  .catch(err => console.error("MongoDB connection error:", err));