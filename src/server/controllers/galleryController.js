const { Gallery } = require('../models');
const fs = require('fs');
const path = require('path');

exports.getGallery = async (req, res) => {
  try {
    const gallery = await Gallery.findAll();
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.uploadImages = async (req, res) => {
  try {
    const { album_name } = req.body;
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'No images uploaded' });
    }

    const galleryEntries = await Promise.all(req.files.map(file => {
      return Gallery.create({
        album_name,
        image_path: `/uploads/${file.filename}`
      });
    }));

    res.status(201).json(galleryEntries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await Gallery.findByPk(id);
    if (!image) return res.status(404).json({ message: 'Image not found' });

    // Delete file from disk
    const filePath = path.join(__dirname, '..', image.image_path);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    await image.destroy();
    res.json({ message: 'Image deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
