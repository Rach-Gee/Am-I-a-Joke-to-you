const router = require('express').Router();
const { Joke } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newCategory = await Joke.create({
        ...req.body,
        user_id: req.session.user_id
      });
  
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


module.exports = router;