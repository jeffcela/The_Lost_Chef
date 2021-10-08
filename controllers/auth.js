const router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/logout', (req, res) => {
    res.render('logout')
})

router.get('/profile', async (req,res) => {
    try {
        res.render('profile', {
            logged_in: true,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;