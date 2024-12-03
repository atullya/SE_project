import express from "express";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { checkAdmin } from "../middleware/admin-middlware.js";
import uploadMiddleware from "../middleware/upload-middleware.js";
import { uploadImage } from "../controllers/admin.controller.js";

const adminRoutes = express.Router();

// Admin welcome route
adminRoutes.get("/welcome", authMiddleware, checkAdmin, (req, res) => {
  res.send("Hello Admin");
});

// Route to handle image upload
adminRoutes.post(
  "/upload",
  authMiddleware, // Ensure user is authenticated
  checkAdmin, // Ensure user is an admin
  uploadMiddleware.single("image"), // Handle file upload
  uploadImage // Image upload handler
);

export default adminRoutes;
