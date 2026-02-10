const express = require('express');
const router = express.Router();
const galleryController = require('../controllers/galleryController');
const upload = require('../middleware/upload');

router.get('/', galleryController.getGallery);
router.post('/', upload.array('images', 6), galleryController.uploadImages); // Up to 6 images as requested
router.delete('/:id', galleryController.deleteImage);

module.exports = router;
