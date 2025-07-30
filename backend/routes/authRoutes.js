import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
const router = express.Router();

router.post("/api/auth/register", registerUser);
router.post("/api/auth/login", loginUser);

export default router;
