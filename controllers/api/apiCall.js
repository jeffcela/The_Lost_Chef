const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();
router.get('/get-recipe/:id', async (req, res) => {
    try {
    const id = req.params.id;
      const response = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}&includeNutrition=true.`,{
        headers: {'Content-Type': 'application/json'}
        // 716429
      })
      res.json(response.data);
    } catch (err) {
        console.log(err)
      res.status(500).json(err);
    }
  });

module.exports = router;