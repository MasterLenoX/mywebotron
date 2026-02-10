const express = require('express');
const cors = require('cors');
const path = require('path');
const { sequelize } = require('./models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/hero', require('./routes/heroRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));
app.use('/api/gallery', require('./routes/galleryRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/timeline', require('./routes/timelineRoutes'));

// Database Sync
sequelize.sync({ force: false }) // Set to true only if you want to drop and recreate tables
  .then(() => {
    console.log('Database synced successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });
