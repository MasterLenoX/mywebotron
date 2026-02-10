const { Timeline } = require('../models');

exports.getTimeline = async (req, res) => {
  try {
    const timeline = await Timeline.findAll({
      order: [['date_from', 'DESC']]
    });
    res.json(timeline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createTimeline = async (req, res) => {
  try {
    const { type, title, company_or_school, date_from, date_to, description, meta } = req.body;
    const timelineData = {
      type,
      title,
      company_or_school,
      date_from,
      date_to,
      description,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    };

    if (req.file) {
      timelineData.image_path = `/uploads/${req.file.filename}`;
    }

    const timeline = await Timeline.create(timelineData);
    res.status(201).json(timeline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const { type, title, company_or_school, date_from, date_to, description, meta } = req.body;
    const timeline = await Timeline.findByPk(id);
    if (!timeline) return res.status(404).json({ message: 'Timeline entry not find' });

    const updateData = {
      type,
      title,
      company_or_school,
      date_from,
      date_to,
      description,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    };

    if (req.file) {
      updateData.image_path = `/uploads/${req.file.filename}`;
    }

    await timeline.update(updateData);
    res.json(timeline);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteTimeline = async (req, res) => {
  try {
    const { id } = req.params;
    const timeline = await Timeline.findByPk(id);
    if (!timeline) return res.status(404).json({ message: 'Timeline entry not found' });

    await timeline.destroy();
    res.json({ message: 'Timeline entry deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
