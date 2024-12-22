const express = require('express');
const router = express.Router();
const { loginAdmin, registerAdmin, protectAdmin } = require('../controllers/authController');
const { createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const { createProject, updateProject, deleteProject } = require('../controllers/projectController');

// Admin registration and login routes
router.post('/login', loginAdmin);
router.post('/register', registerAdmin);

// Protect routes for managing blogs and projects
router.post('/blogs', protectAdmin, createBlog);
router.put('/blogs/:id', protectAdmin, updateBlog);
router.delete('/blogs/:id', protectAdmin, deleteBlog);

router.post('/projects', protectAdmin, createProject);
router.put('/projects/:id', protectAdmin, updateProject);
router.delete('/projects/:id', protectAdmin, deleteProject);

module.exports = router;
