const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Manager, Employee, Customer } = require('../models/User');
require('dotenv').config();

const router = express.Router();

// Manager Login route
router.post('/manager', async (req, res) => {
    try {
        const { username, password } = req.body;
        const manager = await Manager.findOne({ username });

        if (!manager) {
            return res.status(401).json({ loginStatus: 'failure', message: 'Username not found' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, manager.password);
            console.log(process.env.JWT_SECRET);
            if (isPasswordValid) {
                const token = jwt.sign(
                    { role: 'manager', userId: manager._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                );
                res.json({ name: manager.lastName, role: 'manager', loginStatus: 'success', token,  id: manager._id });
            } else {
                res.status(401).json({ loginStatus: 'failure', message: 'Invalid password.' });
            }
          
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
});

// Employee Login route
router.post('/employee', async (req, res) => {
    try {
        const { username, password } = req.body;
        const employee = await Employee.findOne({ username });
        if (!employee) {
            return res.status(401).json({ loginStatus: 'failure', message: 'Username not found' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, employee.password);

            if (isPasswordValid) {
                const token = jwt.sign(
                    { role: 'employee', userId: employee._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                );
                res.json({ name: employee.lastName, role: 'employee', loginStatus: 'success', token,  id: employee._id });
            } else {
                res.status(401).json({ loginStatus: 'failure', message: 'Invalid password.' });
            }

        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during login.');
    }
});

// Customer Login route
router.post('/customer', async (req, res) => {
    try {
        const { username, password } = req.body;
        const customer = await Customer.findOne({ username });
        if (!customer) {
            return res.status(401).json({ loginStatus: 'failure', message: 'Username not found' });
        } else {
            const isPasswordValid = await bcrypt.compare(password, customer.password);

            if (isPasswordValid) {
                const token = jwt.sign(
                    { role: 'customer', userId: customer._id },
                    process.env.JWT_SECRET,
                    { expiresIn: '24h' }
                );
                res.json({ name: customer.lastName, role: 'customer', loginStatus: 'success', token, id: customer._id});
            } else {
                res.status(401).json({ loginStatus: 'failure', message: 'Invalid password.' });
            }

        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during customer login.');
    }
});

module.exports = router;
