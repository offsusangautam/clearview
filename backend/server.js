import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/routes.js';


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON body
app.use(express.json());

// Mount routes
app.use("/api/products",productRoutes);

// Start server after DB connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  await connectDB();
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
