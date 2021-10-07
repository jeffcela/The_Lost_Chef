// import models
const users = require('./users');
const fridges = require('./fridges');
const fridge_ingredients = require('./fridge_ingredients');
const ingredients = require('./ingredients');



//fridges belongs to fridges_ingredient
fridges.belongsTo(users, {
    foreignKey: 'user_id',
});

//ingredient belongs to fridge_ingredient
fridges.belongsToMany(ingredients, {
    through: fridge_ingredients,
    // foreignKey: "fridge_id",
    constraints: false,
    foreignKey: 'ingredients_id'
})

ingredients.belongsToMany(fridges,{
    through: fridge_ingredients,
    // foreignKey: "ingredient_id",
    constraints: false,
    foreignKey: 'fridge_id'
})

fridges.hasMany(fridge_ingredients, {
    foreignKey: "fridge_id",
    constraints: false
})
fridge_ingredients.belongsTo(fridges)
ingredients.hasMany(fridge_ingredients)
fridge_ingredients.belongsTo(ingredients)

//fridges belongs to fridges_ingredient
// fridges.belongsTo(users, {
//     foreignKey: 'user_id',
// });

// //ingredient belongs to fridge_ingredient
// fridge_ingredients.hasOne(ingredients, {
//     // through: "fridge_ingredients",
//     foreignKey: 'ingredients_id',
// })

// fridge_ingredients.hasOne(fridges,{
//     // through: "fridge_ingredients",
//     foreignKey: 'fridge_id',
// })

module.exports = {
    fridges,
    users,
    ingredients,
    fridge_ingredients
};
