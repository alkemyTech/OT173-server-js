'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Entry extends Model { };
    Entry.init({
        name: DataTypes.STRING,
        content: DataTypes.STRING,
        image: DataTypes.STRING,
        categoryId: DataTypes.INTEGER,
        type: DataTypes.STRING,
        deletedAt: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'news',
    });
    return Entry;
};