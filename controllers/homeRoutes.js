const router = require('express').Router();
const { Category, Joke } = require('../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  const categoryData = await Category.findAll().catch((err) => {
    console.log(err)
    res.json(err);
  });

  
  console.log(categoryData)
  // const categories = categoryData.get({ plain: true })
  const categories = categoryData.map((category) => category.get({ plain: true }));
  console.log(categories)
  res.render('homepage', { categories });
});


router.get('/category/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Joke,
        },
      
      ],
    });

    const category = categoryData.get({ plain: true });
    console.log(category)
    res.render('category', {
      ...category,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/joke/:id', async (req, res) => {
  try {
    const jokeData = await Joke.findByPk(req.params.id, {
    });
    console.log("joke1:" + jokeData)
    const joke = jokeData.get({ plain: true });
    console.log("joke:" + { joke })
    res.render('joke', {
      ...joke,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
