const router = require('express').Router();
const { User } = require('../databases/local');

router.post('/signin', (req, res) => {
  const { user, password } = req.body;
  const findedUser = User.find({ _id: user });

  res.json(findedUser?.data);
});

router.post('/signup', (req, res) => {
  const { user, password } = req.body;
  const newUser = User.create({ _id: user, username: user, password }).save();

  res.json(newUser?.data);
});

module.exports = router;
