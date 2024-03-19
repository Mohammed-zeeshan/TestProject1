const { DataTypes } = require('sequelize');

const sequelize = require('../util/database');

const Review = sequelize.define('reviews', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pros: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cons: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {tableName: 'reviews'});

module.exports = Review;