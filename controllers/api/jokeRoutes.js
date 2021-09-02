const router = require('express').Router();
const { Joke } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newCategory = await Joke.create({
        ...req.body,
        
      });
  
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


module.exports = router;