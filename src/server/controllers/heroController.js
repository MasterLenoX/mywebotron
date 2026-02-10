const { Hero } = require('../models');

exports.getHero = async (req, res) => {
  try {
    const hero = await Hero.findOne();
    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateHero = async (req, res) => {
  try {
    const { first_name, last_name, typewriting_text } = req.body;
    let updateData = {
      first_name,
      last_name,
      typewriting_text: typeof typewriting_text === 'string' ? JSON.parse(typewriting_text) : typewriting_text
    };

    if (req.file) {
      updateData.profile_image = `/uploads/${req.file.filename}`;
    }

    let hero = await Hero.findOne();
    if (hero) {
      await hero.update(updateData);
    } else {
      hero = await Hero.create(updateData);
    }

    res.json(hero);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
