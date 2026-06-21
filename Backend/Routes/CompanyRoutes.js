import express from "express";
import { getAllCompanies, getCompanyById } from "../Controller/CompanyController.js";

const router = express.Router();

router.get("/", getAllCompanies);
router.get("/:id", getCompanyById);

export default router;
