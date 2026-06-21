import express from "express";

import { createJob, getAllJobs, getJobById, updateJob, deleteJob, searchJobs} from "../Controller/JobController.js";

const router = express.Router();

router.get("/search", searchJobs);

router.post("/", createJob);
router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);

export default router;
