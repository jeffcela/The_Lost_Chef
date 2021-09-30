const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
const fridgeRoutes = require('./fridgeRoutes');

router.use('/users', loginRoutes);
router.use('/fridges', fridgeRoutes);
module.exports = router;