import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js'; 
import cors from 'cors';


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/products", productRoutes );
app.use("/api/auth", authRoutes); 

// Basic test route
app.get("/", (req, res) => {
  res.send("ClearView API is running");
});

// Start server after DB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
