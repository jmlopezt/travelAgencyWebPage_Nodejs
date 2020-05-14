const Sequelize = require('sequelize');
require('dotenv').config({path: 'variables.env'})

module.exports = new Sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASSWORD, {
  HOST: process.env.BD_HOST,
  USER: process.env.BD_USER,
  PASSWORD: process.env.BD_PASSWORD,
  DB: process.env.BD_NAME,
  dialect: "mysql",
  define: {
      timestamps: false
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
  });