import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  companyId: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  salary: {
    type: Number,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  jobType: {
    type: String,
    required: true,
  },

  postedDate: {
    type: Date,
    default: Date.now,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
