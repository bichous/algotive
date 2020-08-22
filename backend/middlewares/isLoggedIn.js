const User = require('../models/User.js');

exports.isLoggedIn = (req, res, next) => {
  const { isLoggedIn } = req.user;
  if (isLoggedIn) {
    res
      .status(400)
      .json({
        Message:
          'Your have session somewhere else, end that session and try again',
      });
  } else {
    next();
  }
};
