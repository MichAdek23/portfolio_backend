const Project = require("../models/Project");  // Assuming you're using a Mongoose model

// Get all projects from the database
const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();  // Fetch all projects from the database
    res.status(200).json(projects);  // Respond with the projects
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects", error });
  }
};

// Add a new project to the database
const addProject = async (req, res) => {
  const { title, description, image, link } = req.body;

  if (!title || !description || !image || !link) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newProject = new Project({
      title,
      description,
      image,
      link,
    });

    await newProject.save();  // Save the new project to the database
    res.status(201).json(newProject);  // Respond with the newly added project
  } catch (error) {
    res.status(500).json({ message: "Error adding project", error });
  }
};

module.exports = { getProjects, addProject };
