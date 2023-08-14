const bcrypt = require('bcrypt');
const { Event } = require('../models/Event')
const { Customer } = require('../models/User');

const getCustomerInfo = async (req, res) => {
    try {
        const customerID  = req.params.customerID;
        const customer = await Customer.findById( customerID )
        res.status(200).send(customer);  
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error});
    }
}

const updateCustomerInfo = async (req, res) => {
    try {
        const customerID = req.params.customerID;
        const updatedCustomerInfo = req.body;

        const updateCustomer = await Customer.findByIdAndUpdate(customerID, updatedCustomerInfo, { new: true });
        res.status(200).send(updateCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating customer details'});
    }
}

const deleteCustomerAccount = async (req, res) => {
    try {
        const customerID = req.params.customerID;

        // Check if customer is associated with open events
        const openEvents = await Event.find({ customer_id: customerID, status: 'open' });

        if (openEvents.length > 0) {
            return res.status(400).json({ message: 'Customer has open events. Cannot delete account.' });
        }

        // Delete all events with the customerID 
        await Event.deleteMany({ customer_id: customerID });

        // Delete customer account
        const deletedCustomer = await Customer.findByIdAndDelete(customerID);

        if (!deletedCustomer) {
            return res.status(404).json({ message: 'Customer not found.' });
        }

        res.status(201).json({ message: 'Customer account deleted successfully.' });
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to delete customer account.' });
    }
};

const changePassword = async(req, res) => {
    try {
        const customerID  = req.params.customerID;
        const customer = await Customer.findById( customerID );
        const { oldPassword, newPassword } = req.body
        const isPasswordValid = await bcrypt.compare(oldPassword, customer.password);

        if (isPasswordValid) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newPassword, salt)
            await Customer.findByIdAndUpdate({_id: customerID}, {password: hashedPassword}, { new: true })
        } else {
            return res.status(500).json({message: 'Wrong password'})
        }

        res.status(200).json({message: 'Change password successfully'})
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' + error});
    }
}

module.exports = {
    getCustomerInfo,
    updateCustomerInfo,
    deleteCustomerAccount,
    changePassword
}