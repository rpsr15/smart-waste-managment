const { userModel } = require('../models/user.model');

exports.signUp = (req, res) => {
  const userData = req.body;
  const email = userData.email;

  if (!validateEmail(email)) {
    return res.status(400).json({ message: 'Please enter a valid email address', result: false });
  }

  userModel.checkExistingUser(email)
    .then((existingUser) => {
      if (!existingUser) {
        userModel.createUser(userData)
          .then(() => {
            res.status(200).json({ message: 'User successfully saved', result: true });
          })
          .catch((error) => {
            res.status(500).json({ message: 'Failed to create user', result: false });
          });
      } else {
        res.status(400).json({ message: 'User already exists', result: false });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to check existing user', result: false });
    });
};

exports.login = (req, res) => {
  const userData = req.body;
  const email = userData.email;
  const password = userData.password;

  userModel.getUserByEmail(email)
    .then((user) => {
      if (user && user.password === password) {
        res.status(200).json({ message: 'Success: User logged in.', result: true });
      } else {
        res.status(400).json({ message: 'Failed: Please enter valid email and password.', result: false });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Failed to get user', result: false });
    });
};
