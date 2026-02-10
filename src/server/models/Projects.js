const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Projects = sequelize.define('Projects', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  image_path: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  meta: {
    type: DataTypes.JSON,
    allowNull: true
  }
}, {
  tableName: 'projects',
  timestamps: false
});

module.exports = Projects;
