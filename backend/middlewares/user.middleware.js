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
        res.status(500).json({ message: 'Error updating event details' });
    }
}

module.exports = {
    getCustomerInfo,
    updateCustomerInfo
}