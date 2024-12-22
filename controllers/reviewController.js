const Review = require("../models/Review");

// Fetch all reviews
const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add a new review
const addReview = async (req, res) => {
  const { reviewerName, content, rating } = req.body;
  try {
    const review = new Review({ reviewerName, content, rating });
    const savedReview = await review.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getReviews, addReview };
