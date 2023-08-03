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

const createEvent = async (req, res) => {
    try {
        const {
          name,
          customer_id,
          deadline,
          place,
          type_of_event,
          description,
          date_proposed,
          size,
          budget,
          status
        } = req.body;
    
        // Create a new event
        const newEvent = new Event({
            name,
            customer_id,
            deadline,
            place,
            type_of_event,
            description,
            date_proposed,
            size,
            budget,
            status
        });
    
        // Save the event to the database
        await newEvent.save();
    
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
      } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'An error occurred during event creation' });
      }
}

module.exports = {
    allEvents,
    eventDetail,
    allTaskOfEvent,
    allEventOfCustomer,
    allOpenEvents,
    eventOpenDetail,
    createEvent
}