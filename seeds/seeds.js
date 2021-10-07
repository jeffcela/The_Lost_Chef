const sequelize = require('../config/connection');
const {fridges,users,ingredients, fridge_ingredients} = require('../models');
const userData = require('./user.json')
const fridgeData = require('./fridges.json')
const fridgeIngredientData = require('./fridge_ingredients.json')
const seedData = async () => {
    await sequelize.sync({ force: false })
    await users.create(userData)
    await fridges.bulkCreate(fridgeData)
    await fridge_ingredients.bulkCreate(fridgeIngredientData)
    process.exit(0)
}
seedData(); 