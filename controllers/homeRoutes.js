const router = require('express').Router();
const { Category, Joke, Review, User } = require('../models');
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
  res.render('homepage', { categories, logged_in: req.session.logged_in, });
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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/joke/:id', async (req, res) => {
  try {
    const jokeData = await Joke.findByPk(req.params.id, {
      include:[
      {
        model: Review,
        include:[User]
      },
      
    ]
    });
    
    const joke = jokeData.get({ plain: true });
   
    res.render('joke', {
      ...joke,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});


module.exports = router;
