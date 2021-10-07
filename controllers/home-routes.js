const router = require('express').Router();
// const withAuth = require();
const {fridge_ingredients, ingredients, fridges} = require('../models');

router.get('/', async (req,res) => {
    try {

        res.render('home', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/register', async (req,res) => {
    try {

        res.render('register', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/login', async (req,res) => {
    try {

        res.render('login', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/profile', async (req,res) => {
    try {

        res.render('profile', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/build-my-recipes', async (req,res) => {
    try {

        res.render('build-my-recipes', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/favorite-recipes', async (req,res) => {
    try {

        res.render('favorite-recipes', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/user-fridges', async (req,res) => {
    try {
        const fridge = await fridges.findOne({
            
        })
        const ingredientsData = await fridge_ingredients.findAll({
            include: [
                {
                  model: ingredients,
                  attributes: ['ingredients_name'],
                },
              ],
            where: {
              fridge_id: fridge.get({plain: true}).fridge_id
            },
        });
        console.log(ingredientsData)
        const ingredientsListItems = ingredientsData.map((ingredient) => {
            return ingredient.get({ plain: true })
        }) 
        res.render('user-fridges', {
            logged_in: true,
            ingredientsListItems
        });
    } catch (err) {
        console.log(err)
        res.status(400).json(err);
        
    }
});

module.exports = router;
