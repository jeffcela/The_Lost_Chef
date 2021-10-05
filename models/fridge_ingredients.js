// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class fridge_ingredients extends Model {}

fridge_ingredients.init(
    {
        // define columns
        fridge_ingredients_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        fridge_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'fridges',
            //     key: 'fridge_id'
            // }
        },
        ingredients_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // references: {
            //     model: 'ingredient',
            //     key: 'api_id'
            // }
        },
    },
    {
         // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true,
        underscored: true,
        modelName: 'fridge_ingredients',
      }
);

module.exports = fridge_ingredients;