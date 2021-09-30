// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class user_fridges extends Model {}

user_fridges.init(
    {
        // define columns
        user_fridge_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        fridge_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
         // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true,
        underscored: true,
        modelName: 'user_fridge',
      }
);

module.exports = user_fridges;