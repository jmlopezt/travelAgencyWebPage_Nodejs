const Sequelize = require('sequelize');
const db = require('../config/database');

const Travel = db.define('travel',{
    travelID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.STRING
    },
    departureDate: {
        type: Sequelize.DATE
    },
    returnDate: {
        type: Sequelize.DATE
    },
    image: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    available: {
        type: Sequelize.STRING
    },
},{
    tableName: 'travel'
});

module.exports = Travel;