import express from "express";
import cors from "cors";
import connectDB from "./DB/db.js";
import jobRoutes from "./Routes/JobRoutes.js";
import companyRoutes from "./Routes/CompanyRoutes.js";
import eventRoutes from "./Routes/EventRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/jobs", jobRoutes);
app.use("/api/companies", companyRoutes);
app.use("/api/events", eventRoutes);

app.get("/", (req, res) => {
  res.send("Job Portal API Running");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});