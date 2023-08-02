const { Event, Task } = require('../models/Event');

const allEvents = async (req, res) => {
    try {
        const allEvents = await Event.find({});
        res.status(200).send(allEvents);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}

const eventDetail = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Tìm sự kiện dựa vào eventId trong database
        const eventDetail = await Event.findById(eventId);

        if (!eventDetail) {
            return res.status(404).json({ message: 'Event not found.' });
        }
        res.status(200).send(eventDetail);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}
const eventOpenDetail = async (req, res, next) => {
    try {
        const eventId = req.params.eventId;

        // Tìm sự kiện dựa vào eventId trong database
        const eventDetail = await Event.findById(eventId);

        if (!eventDetail || !eventDetail.status || eventDetail.status != 'open') {
            return res.status(404).json({ message: 'Event not found.' });
        }
        res.status(200).send(eventDetail);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}
const allTaskOfEvent = async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Tìm sự kiện dựa vào eventId trong database
        const tasks = await Task.find({ event_id: eventId });

        // Trả về task của sự kiện dưới dạng JSON
        res.status(200).json({ tasks });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch tasks.' });
    }
}

const allOpenEvents = async (req, res) => {
    try {
        const allOpenEvents = await Event.find( {status: 'open'} );
        res.status(200).send(allOpenEvents)
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}

const allEventOfCustomer = async (req, res) => {
    try {
        const { customerid } = req.params.customerid;
        const events = await Event.find({ customer_id: customerid });
        res.status(200).send(events);  
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}

module.exports = {
    allEvents,
    eventDetail,
    allTaskOfEvent,
    allEventOfCustomer,
    allOpenEvents,
    eventOpenDetail
}