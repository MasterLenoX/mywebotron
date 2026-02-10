const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gallery = sequelize.define('Gallery', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  album_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  image_path: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  uploaded_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'gallery',
  timestamps: false
});

module.exports = Gallery;
