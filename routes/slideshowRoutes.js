const express = require('express');
const multer = require('multer');
const router = express.Router();
const {
  getAllImages,
  addImage,
  deleteImage,
} = require('../controllers/slideshowController'); // Import controllers

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure the folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Unique filenames
  },
});

const upload = multer({ storage });

// Route to fetch all images
router.get('/', getAllImages);

// Route to add new images (supporting multiple file uploads)
router.post('/', upload.array('images', 10), addImage);  // 'images' is the field name, and 10 is the max number of files allowed

// Route to delete an image by ID
router.delete('/:id', deleteImage);

module.exports = router;
