const { EventRegister } = require("../models/Event");
const { Employee } = require('../models/User');
const getRegisteredAndUnregisteredEmployees = async (req, res, next) => {
    try {
        const eventId = req.params.eventId;

        // Find all event registers for the given eventId and populate 't_member_id' field
        const eventRegisters = await EventRegister.find({ event_id: eventId }).populate('t_member_id');

        // Get an array of registered employee IDs
        const registeredEmployeeIds = eventRegisters.map((eventRegister) => eventRegister.t_member_id._id);

        // Find all employees not registered for the given eventId
        const unregisteredEmployees = await Employee.find(
            { _id: { $nin: registeredEmployeeIds } },
            'firstName lastName email phone department'
        );

        const registeredEmployees = eventRegisters.map((eventRegister) => ({
            name: `${eventRegister.t_member_id.firstName} ${eventRegister.t_member_id.lastName}`,
            email: eventRegister.t_member_id.email,
            phone: eventRegister.t_member_id.phone,
            department: eventRegister.t_member_id.department,
        }));

        const unregisteredEmployeesWithNames = unregisteredEmployees.map((employee) => ({
            name: `${employee.firstName} ${employee.lastName}`,
            email: employee.email,
            phone: employee.phone,
            department: employee.department,
        }));

        const result = {
            registered: registeredEmployees,
            unregistered: unregisteredEmployeesWithNames,
        };

        res.json({ employees: result });
    } catch (err) {
        next(err);
    }
};
const getRegisteredEmployees = async (req, res, next) => {
    try {
        const eventId = req.params.eventId;

        // Find all event registers for the given eventId and populate 't_member_id' field
        const eventRegisters = await EventRegister.find({ event_id: eventId }).populate('t_member_id');

        // Get an array of registered employee IDs

        const registeredEmployees = eventRegisters.map(eventRegister => eventRegister.t_member_id);

        res.json(registeredEmployees);
    } catch (error) {
        next(error);
    }
};
const getUnregisteredEmployees = async (req, res, next) => {
    try {
        const eventId = req.params.eventId;

        // Find all employees
        const allEmployees = await Employee.find();

        // Find all event registers for the given eventId
        const eventRegisters = await EventRegister.find({ event_id: eventId });

        // Get an array of registered employee IDs
        const registeredEmployeeIds = eventRegisters.map((eventRegister) => eventRegister.t_member_id.toString());

        // Filter unregistered employees
        const unregisteredEmployees = allEmployees.filter((employee) => !registeredEmployeeIds.includes(employee._id.toString()));

        res.json(unregisteredEmployees);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getRegisteredAndUnregisteredEmployees,
    getRegisteredEmployees,
    getUnregisteredEmployees
}