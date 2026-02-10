const express = require('express');
const router = express.Router();
const timelineController = require('../controllers/timelineController');
const upload = require('../middleware/upload');

router.get('/', timelineController.getTimeline);
router.post('/', upload.single('image'), timelineController.createTimeline);
router.put('/:id', upload.single('image'), timelineController.updateTimeline);
router.delete('/:id', timelineController.deleteTimeline);

module.exports = router;
