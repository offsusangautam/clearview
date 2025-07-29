import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/routes.js'; // product routes
import authRoutes from './routes/authRoutes.js'; // 👈 NEW auth routes
import cors from 'cors'; // Optional but helpful for frontend-backend connection

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors()); // allow requests from frontend
app.use(express.json()); // parse JSON bodies

// Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes); // 👈 mount auth routes

// Root route for testing
app.get("/", (req, res) => {
  res.send("ClearView API is running");
});

app.use('/api/auth', authRoutes);

// Start server after DB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
