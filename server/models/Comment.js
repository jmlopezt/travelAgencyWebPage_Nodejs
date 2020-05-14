const Sequelize = require('sequelize');
const db = require('../config/database');

const Comment = db.define('comment',{
    commentID: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    }
},{
    tableName: 'comment'
});

module.exports = Comment;