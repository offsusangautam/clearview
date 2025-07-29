import mongoose from "mongoose";
import Product from "../models/product.js";

// GET all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error(" GET error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// POST (create) a new product
export const createProduct = async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price || !description) {
    return res.status(400).json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newProduct = new Product({ name, price, description });
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(" POST error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// PUT (update) a product by ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ success: false, message: "Invalid Product ID" });
  }

  if (!product || Object.keys(product).length === 0) {
    return res.status(400).json({ success: false, message: "No update fields provided" });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(" PUT error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

// DELETE a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Invalid product ID" });
  }

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(200).json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, message: "Product deleted", data: deletedProduct });
  } catch (error) {
    console.error(" DELETE error:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
