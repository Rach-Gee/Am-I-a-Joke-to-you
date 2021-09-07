const User = require('./User');
const Category = require('./Category');
const Joke = require('./Joke');
const Review = require('./Review');

User.hasMany(Review, {
  foreignKey: 'user_id'
});

Review.belongsTo(User, {
  foreignKey: 'user_id'
});

Category.hasMany(Joke, {
  foreignKey: 'category_id'
});

Joke.belongsTo(Category, {
  foreignKey: 'category_id'
});

Joke.hasMany(Review, {
  foreignKey: 'joke_id'
});

Review.belongsTo(Joke, {
  foreignKey: 'joke_id'
});

User.hasMany(Joke, {
  foreignKey: 'user_id'
});

Joke.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'jokeUser'
});


module.exports = { User, Category, Joke, Review };
