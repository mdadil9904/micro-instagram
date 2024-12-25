const { DataTypes } = require('sequelize')
const sequelize = require('../database')
const User = require('./user')

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    images: {
        type: DataTypes.JSON,
        allowNull: true,
    },
});

Post.belongsTo(User, { foreignKey: 'userId'});
User.hasMany(Post, { foreignKey: 'userId'});
module.exports = Post;