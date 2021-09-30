const router = require('express').Router();
const userRoutes = require('auth');
router.get('/', userRoutes);

module.exports = router;