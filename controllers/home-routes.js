const router = require('express').router();
const { buildMyRecipe, favoriteRecpies, userfridge } = require('../models');
const withAuth = require();

router.get('/', async (req,res) => {
    try {
        const fridgesData = await Fridges.findAll({
            include: [
                {
                    model: userfridge,
                    attributes: ['name'],
                }
            ]
        });

        res.render('homepage', {
            fridges,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(400).json(err);
    }
});


router.get('/fridges/:id', async (req, res) => {
    try {}
});


router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });
  
module.exports = router;
