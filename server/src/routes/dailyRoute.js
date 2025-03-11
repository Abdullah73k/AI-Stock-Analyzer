import express from "express";
import { getStock } from "../controllers/dailyController.js";

const router = express.Router();

router.get("/daily", getStock)

export default router;