const router = require('express').Router();
// const withAuth = require();

router.get('/', async (req,res) => {
    try {

        res.render('home', {
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

        res.render('user-fridges', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
