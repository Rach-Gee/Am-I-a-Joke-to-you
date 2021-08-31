const router = require('express').Router();
const { User, Index, Category, Review } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
    });

    const categories = categoryData.get({ plain: true });

    res.render('homepage', {
      categories,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
