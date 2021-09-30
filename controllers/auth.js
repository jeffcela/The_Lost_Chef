const router = require('express').Router();

router.get('/login', (res, req) => {
    res.render('login')
})

router.get('/register', (res, req) => {
    res.render('register')
})

module.exports = router;