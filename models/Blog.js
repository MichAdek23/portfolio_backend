const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Assuming you have a User model
    tags: { type: [String], default: [] },  // Array of tags for better categorization
    isActive: { type: Boolean, default: true }, // Flag to indicate if the blog is active
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("Blog", blogSchema);
