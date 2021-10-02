// import models
const users = require('./users');
const fridges = require('./fridges');
const fridgeIngredients = require('./fridge_ingredients');
const ingredients = require('./ingredients');

//fridges belongs to fridges_ingredient
fridges.belongsTo(users, {
    foreignKey: 'user_id',
});

//ingredient belongs to fridge_ingredient
// ingredients.belongsToMany(fridges, {
//     through: "fridge_ingredients",
//     foreignKey: 'ingredients_id',
// })

// fridges.belongsToMany(ingredients,{
//     through: "fridge_ingredients",
//     foreignKey: 'fridge_id',
// })

fridgeIngredients.hasOne(ingredients, {
    foreignKey: 'ingredients_id'
});

fridgeIngredients.hasOne(fridges, {
    foreignKey: 'fridge_id'
});

module.exports = {
    fridges,
    users,
    ingredients,
    fridgeIngredients
};
  