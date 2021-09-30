// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class ingredients extends Model {}

ingredients.init(
    {
        // define columns
        ingredients_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        }
    },
    {
         // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredients',
      }
);

module.exports = ingredients;