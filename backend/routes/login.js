const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Manager, Employee } = require('../models/User');
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
                res.json({ name: manager.lastName, role: 'manager', loginStatus: 'success', token });
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
                    process.env.jwt,
                    { expiresIn: '24h' }
                );
                res.json({ name: employee.lastName, role: 'employee', loginStatus: 'success', token });
            } else {
                res.status(401).json({ loginStatus: 'failure', message: 'Invalid password.' });
            }

        }
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred during employee login.');
    }
});

module.exports = router;
