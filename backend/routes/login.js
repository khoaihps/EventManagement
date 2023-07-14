// routes/login.js
const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');

const router = express.Router();

// Login route
router.post('/', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      res.status(404).send('User not found.');
    } else {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        req.session.user = user;

        // Check user role and redirect accordingly
        if (user.role === 'manager') {
          res.redirect('/manager/dashboard');
        } else if (user.role === 'employee') {
          res.redirect('/employee/dashboard');
        } else {
          res.status(403).send('Invalid user role.');
        }
      } else {
        res.status(401).send('Invalid password.');
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred during login.');
  }
});

module.exports = router;
