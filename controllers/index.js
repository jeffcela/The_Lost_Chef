const router = require('express').Router();
const userRoutes = require('auth');

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');

router.get('/', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;

