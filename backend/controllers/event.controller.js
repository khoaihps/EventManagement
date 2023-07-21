const { Event } = require('../models/Event');

const allEvents = async (req, res) => {
    try {
        const allEvents = await Event.find({});
        res.status(200).send(allEvents);
    } catch (error) {
        console.log("Error", error);
        res.status(500);
    }
    
}

const allOpenEvents = async (req, res) => {
    const query = { status: 'open' };
    const openEvents = await Event.find(query).toArray();
    return openEvents;
}

const allEventOfCustomer = async (req, res) => {
    if (!req.params.customer_id) {
        return {};
    }
    const customer_id = req.params.customer_id;
    const query = { csutomer_id: customer_id };
    const openEvents = await Event.find(query).toArray();
    return openEvents;
}
module.exports = {
    allEvents,
    allEventOfCustomer,
    allOpenEvents
}