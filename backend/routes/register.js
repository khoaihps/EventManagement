const express = require('express');
const bcrypt = require('bcrypt');
const { Manager, Employee, Customer } = require('../models/User');

const router = express.Router();

// Manager Register route
router.post('/manager', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            username,
            password,
            DOB,
            email,
            phone,
            address
        } = req.body;

        // Check if the employee already exists
        const existingManager = await Manager.findOne({ username });
        if (existingManager) {
            return res.status(409).json({ message: 'Username already exists.' });
        }
        
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new manager
        const newManager = new Manager({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            DOB,
            email,
            phone,
            address
        });

        // Save the manager to the database
        await newManager.save();

        res.status(201).json({ message: 'Manager account registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during registration.' });
    }
});

// Employee Register route
router.post('/employee', async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            username,
            password,
            DOB,
            email,
            phone,
            address,
            department
        } = req.body;
        console.log(username);
        // Check if the employee already exists
        const existingEmployee = await Employee.findOne({ username });
        if (existingEmployee) {
            return res.status(409).json({ message: 'Username already exists.' });
        }
        
        // Generate a salt and hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new employee
        const newEmployee = new Employee({
            firstName,
            lastName,
            username,
            password: hashedPassword,
            DOB,
            email,
            phone,
            address,
            department
        });

        // Save the employee to the database
        await newEmployee.save();

        res.status(201).json({ message: 'Employee account registered successfully.' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during registration.' });
    }
});

// Customer Register Route
router.post('/customer', async (req, res) => {
  try {
      const {
          firstName,
          lastName,
          username,
          password,
          DOB,
          email,
          phone,
          address
      } = req.body;

      // Check if the customer already exists
      const existingCustomer = await Customer.findOne({ $or: [{ username }, { email }, { phone }] });
      if (existingCustomer) {
          return res.status(409).json({ message: 'Username already exists.' });
      }

      // Generate a salt and hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create a new customer
      const newCustomer = new Customer({
          firstName,
          lastName,
          username,
          password: hashedPassword,
          DOB,
          email,
          phone,
          address
      });

      // Save the customer to the database
      await newCustomer.save();

      res.status(201).json({ message: 'Customer account registered successfully.' });

  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred during registration.' });
  }
});

module.exports = router;
