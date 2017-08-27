const Sequelize = require('sequelize');
const db = require('./db');

const Judge = db.define('Judge', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  image_url: {
    type: Sequelize.STRING,
    default: null,
  },
  bio: {
  	type: Sequelize.STRING,
  	default: '',
  	allowNull: false,
  },
  regular: {
  	type: Sequelize.BOOLEAN,
  	default: false
  }
})

module.exports = Judge;
