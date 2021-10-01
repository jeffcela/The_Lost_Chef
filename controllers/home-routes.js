const router = require('express').router();
const withAuth = require();

router.get('/', async (req,res) => {
    try {

        res.render('homepage', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/build-my-recipes', async (req,res) => {
    try {

        res.render('buildMyRecipes', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/favorite-recipes', async (req,res) => {
    try {

        res.render('favoriteRecipes', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/user-fridges', async (req,res) => {
    try {

        res.render('userFridges', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
