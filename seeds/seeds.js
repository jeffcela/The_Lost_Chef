const sequelize = require('../config/connection');
const {fridges,users,ingredients,fridgeIngredients} = require('../models');
const userData = require('./user.json')
const fridgeData = require('./fridges.json')
const fridgeIngredientData = require('./fridge_ingredients.json')
const seedData = async () => {
    await sequelize.sync({ force: false })
    // await users.create(userData)
    // await fridges.create(fridgeData)
    await fridgeIngredients.bulkCreate(fridgeIngredientData, { return: true })
    process.exit(0)
}
seedData();