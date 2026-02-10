const { Hero, sequelize } = require('../models');

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: false });

    const heroCount = await Hero.count();
    if (heroCount === 0) {
      await Hero.create({
        first_name: 'Leonard James',
        last_name: 'Emperado',
        typewriting_text: [
          'Software Engineer',
          'Full Stack Developer',
          'IT Support Specialist',
          'Web Developer',
          'Software Developer'
        ],
        profile_image: '/uploads/user.jpg' // Assuming the user will upload this
      });
      console.log('Database seeded with Hero data!');
    } else {
      console.log('Database already has data, skipping seed.');
    }
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    process.exit();
  }
};

seedDatabase();
