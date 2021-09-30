// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

class fridges extends Model {}

fridges.init(
    {
        // define columns
        fridge_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        fridge_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
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
        modelName: 'fridges',
      }
);

module.exports = fridges;