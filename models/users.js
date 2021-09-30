// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class users extends Model {}

users.init(
    {
        // define columns
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
         // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true,
        underscored: true,
        modelName: 'users',
      }
);

module.exports = users;