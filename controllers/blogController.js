const Blog = require("../models/Blog");

// Fetch all blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new blog
const addBlog = async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const blog = new Blog({ title, content, author });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getBlogs, addBlog };
