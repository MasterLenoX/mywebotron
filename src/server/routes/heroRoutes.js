const express = require('express');
const router = express.Router();
const heroController = require('../controllers/heroController');
const upload = require('../middleware/upload');

router.get('/', heroController.getHero);
router.put('/', upload.single('profile_image'), heroController.updateHero);

module.exports = router;
