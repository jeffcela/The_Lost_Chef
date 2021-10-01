const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;

const router = require('express').Router();
const { Fridge } = require(‘../../models’);
const withAuth = require(‘../../utils/auth’);
router.post(‘/’, withAuth, async (req, res) => {
    try {
      const createFridge = await Fridge.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(createFridge);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  router.delete(‘/:id’, withAuth, async (req, res) => {
    try {
      const fridgeData = await Fridge.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!fridgeData) {
        res.status(404).json({ message: ‘No fridge found with this id!’ });
        return;
      }
      res.status(200).json(fridgeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
white_check_mark
eyes
raised_hands