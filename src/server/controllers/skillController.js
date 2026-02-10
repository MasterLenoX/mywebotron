const { Skills } = require('../models');

exports.getSkills = async (req, res) => {
  try {
    const skills = await Skills.findAll();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createSkill = async (req, res) => {
  try {
    const { category, name, meta } = req.body;
    const skill = await Skills.create({
      category,
      name,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    });
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, name, meta } = req.body;
    const skill = await Skills.findByPk(id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    await skill.update({
      category,
      name,
      meta: typeof meta === 'string' ? JSON.parse(meta) : meta
    });
    res.json(skill);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await Skills.findByPk(id);
    if (!skill) return res.status(404).json({ message: 'Skill not found' });

    await skill.destroy();
    res.json({ message: 'Skill deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
