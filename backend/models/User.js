const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['manager', 'employee', 'customer'], required: true },
});

// Customer Schema
const customerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    DOB: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

// Manager Schema
const managerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    DOB: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true }
});

// Employee Schema
const employeeSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    DOB: { type: Date, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    department: { type: String, enum: ['Operation', 'Media', 'Program - MC', 'Content Planning'], required: true }
});


const User = mongoose.model('User', userSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Manager = mongoose.model('Manager', managerSchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    User,
    Customer,
    Manager,
    Employee,
};