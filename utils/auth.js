const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.status(403).json('You need to be logged in to do that!');
  } else {
    next();
  }
};

module.exports = withAuth;
