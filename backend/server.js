import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { connectDB } from './config/db.js';
import Product from './models/product.js';

dotenv.config(); // Load .env variables early

const app = express();
app.use(express.json()); // Allows us to accept JSON data from body

app.get("/api/products",async(req,res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success:true,data:products});
        
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({ success:false,message: "Server Error"});
        
    }

})

// POST /api/products - Create product
app.post("/api/products", async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(" POST Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.put ("/api/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({success:false , message: "Invalid Product Id"});
    }
    try {
        
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    res.status(200).json({ success: true, data: updatedProduct });      
    } catch (error) {
        res.status(500).json({success: false, message: "Server Error"});
        console.log("PUT Error:", error.message);
        
    }
})

// DELETE /api/products/:id - Delete product
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  // Validate MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid product ID" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted", data: deletedProduct });
  } catch (error) {
    console.error("❌ DELETE Error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

// Connect to MongoDB and start server
console.log("MONGO_URI:", process.env.MONGO_URI); // Debug log

app.listen(5000, async () => {
  await connectDB();
  console.log("✅ Server started at http://localhost:5000");
});
