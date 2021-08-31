const router = require('express').Router();
const { Category } = require('../models');
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

// router.get('/', async (req, res) => {
//   try {
//     const categoryData = await Category.findAll({
//     });
//   if (categoryData) 
  
//   {const categories = categoryData.get({ plain: true });

//   res.render('homepage', {
//     categories,
//   });}

//   else {res.status(404).json("Nothing found!");}
    
//   } catch (err) {
//     console.log("Big error!")
//     console.log(err)
//     res.status(500).json(err);
//   }
// });




module.exports = router;
