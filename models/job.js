const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    corporateType: {
      type: String,
      required: true,
    },
    employmentType: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    responsibilities: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Jobs", jobSchema);
