import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    required: true,
  },

  industry: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});

const Company = mongoose.model("Company", companySchema);

export default Company;