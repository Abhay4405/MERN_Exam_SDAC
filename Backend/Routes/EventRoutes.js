import express from "express";
import { getAllEvents } from "../Controller/EventController.js";

const router = express.Router();

router.get("/", getAllEvents);

export default router;