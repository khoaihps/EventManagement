const { Customer, Manager, Employee } = require("../models/User");

const getCustomerInfo = async (req, res) => {
    try {
        const customerID = req.params.customerID;
        const customer = await Customer.findById(customerID)
        res.status(200).send(customer);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error });
    }
}
const getManagerInfo = async (req, res) => {
    try {
        const managerID = req.params.managerID;
        const manager = await Manager.findById(managerID)
        res.status(200).send(manager);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error });
    }
}
const getEmployeeInfo = async (req, res) => {
    try {
        const employeeID = req.params.employeeID;
        const employee = await Employee.findById(employeeID)
        res.status(200).send(employee);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error });
    }
}
const getAllEmployees = async (req, res, next) => {
    try {
        const allEmployees = await Employee.find();
        res.json(allEmployees);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error });
    }
}
module.exports = {
    getCustomerInfo,
    getEmployeeInfo,
    getManagerInfo,
    getAllEmployees
}