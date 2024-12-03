import express from "express";
import { viewAllBlog } from "../controllers/guest.controller.js";
const guestRoutes = express.Router();

guestRoutes.get("/allblogs", viewAllBlog);

export default guestRoutes;
