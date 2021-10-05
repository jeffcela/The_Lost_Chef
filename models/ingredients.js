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
            primaryKey: true,
            autoIncrement: true
        },
    
    
        ingredients_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    
    ingredients_api_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    },  
    {
         // Link to database connection
        sequelize,
        // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true,
        underscored: true,
        modelName: 'ingredients',
        timestamps: false
      }
);

module.exports = ingredients;