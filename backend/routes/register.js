const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');

const router = express.Router();

// Register route
router.post('/', async (req, res) => {
    try {
      const { username, password, role } = req.body;
  
      // Check if the user already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).send('User already exists.');
      }
  
      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create a new user
      const newUser = new User({
        username,
        password: hashedPassword,
        role
      });
  
      // Save the user to the database
      await newUser.save();
  
      res.status(201).send('User registered successfully.');
    } catch (error) {
      console.error(error);
      res.status(500).send('An error occurred during registration.');
    }
});

module.exports = router;
