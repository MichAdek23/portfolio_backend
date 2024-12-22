const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,  // Store the image URL or path
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
