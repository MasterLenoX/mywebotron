const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Skills = sequelize.define('Skills', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  category: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  meta: {
    type: DataTypes.JSON,
    allowNull: true
  },
  icon: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'skills',
  timestamps: false
});

module.exports = Skills;
