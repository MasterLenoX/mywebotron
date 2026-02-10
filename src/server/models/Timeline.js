const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Timeline = sequelize.define('Timeline', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  type: {
    type: DataTypes.ENUM('work', 'education'),
    allowNull: false
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  company_or_school: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  date_from: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  date_to: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  meta: {
    type: DataTypes.JSON, // e.g., ["React", "Node"]
    allowNull: true
  },
  image_path: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'timeline',
  timestamps: false
});

module.exports = Timeline;
