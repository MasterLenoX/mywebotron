const sequelize = require('../config/database');
const Hero = require('./Hero');
const Skills = require('./Skills');
const Gallery = require('./Gallery');
const Projects = require('./Projects');
const Timeline = require('./Timeline');

const models = {
  Hero,
  Skills,
  Gallery,
  Projects,
  Timeline,
};

module.exports = {
  sequelize,
  ...models
};
