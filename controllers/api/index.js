const router = require('express').Router();
const userRoutes = require('./userRoutes');
const categoryRoutes = require('./categoryRoutes');
const jokeRoutes = require('./jokeRoutes');

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/jokes', jokeRoutes);

module.exports = router;
