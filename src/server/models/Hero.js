const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hero = sequelize.define('Hero', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  typewriting_text: {
    type: DataTypes.JSON, // Stores array of strings
    allowNull: false
  },
  profile_image: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'hero',
  timestamps: false
});

module.exports = Hero;
