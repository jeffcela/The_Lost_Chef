const router = require('express').Router();
const loginRoutes = require('./loginRoutes');
// const fridgeRoutes = require('./fridgeRoutes');
const apiRoutes = require('./apiCall');
router.use('/users', loginRoutes);
// router.use('/fridges', fridgeRoutes);
router.use('/apicall', apiRoutes);
module.exports = router;