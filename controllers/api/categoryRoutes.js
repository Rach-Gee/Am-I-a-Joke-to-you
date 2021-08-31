const router = require('express').Router();
const { Category } = require('../../models');

router.post('/', async (req, res) => {
    try {
      const newCategory = await Category.create({
        ...req.body,
        
      });
  
      res.status(200).json(newCategory);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  


module.exports = router;