const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signToken = (user) => {
  return jwt
    .sign(
      {
        userId: user._id,
        email: user.email,
      },
      process.env.SECRET,
      { expiresIn: '72h' }
    )
    .split('.');
};

exports.verifyToken = (req, res, next) => {
  const { headload, signature } = req.cookies;
  if (!headload && !signature)
    return res.status(401).json({ message: 'Missing Token' });
  jwt.verify(
    `${headload}${signature}`,
    process.env.SECRET,
    async (err, decoded) => {
      if (err) return status(401).json(err);
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(400).json({ message: 'user not found' });
      }

      req.user = user;
      next();
    }
  );
};
