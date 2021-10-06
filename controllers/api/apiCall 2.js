const router = require('express').Router();
const { fridge_ingredients } = require('../../models');
const { ingredients } = require('../../models')
const axios = require('axios');
require('dotenv').config();
router.get('/get-recipe/:id', async (req, res) => {
    try {
    const id = req.params.id;
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}&includeNutrition=true.`,{
        headers: {'Content-Type': 'application/json'}
        // 716429
      })
      res.json(response.data);
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });

  router.post('/get-recipes', async (req, res) => {
    try {
        const ingredientsData = await fridge_ingredients.findAll({
            include: [
                {
                  model: ingredients,
                  attributes: ['ingredients_name'],
                },
              ],
            where: {
              fridge_id: req.body.fridge_id,
            },
        });
        const ingredientsList = ingredientsData.map((ingredient) => {
            return ingredient.get({ plain: true})
        }) 

        let strData = '' 
        ingredientsList.forEach((item, index)=> {
            console.log(item)
            if (index == 0) {
                strData = item.ingredient.ingredients_name + "," 
            } else {
                strData = strData + "+" + item.ingredient.ingredients_name + ","
            }
            })
        // res.json(ingredients)
        console.log(strData);
      const response = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${strData}&number=10`,{
        headers: {'Content-Type': 'application/json'}
        // 716429
      })
      res.json(response.data);
    //   if (!ingredientsData) {
    //     res.status(404).json({ message: 'No ingredients found with this id!' });
    //     return;
    //   }
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });
  
module.exports = router;