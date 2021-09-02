const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const jokeRoutes = require('./jokeRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/jokes', jokeRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;
