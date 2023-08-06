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

const eventUpdate = async (req, res) => {
    try {
        const eventId = req.params.eventId;
        const updatedEventDetails = req.body;

        const updatedEvent = await Event.findByIdAndUpdate(eventId, updatedEventDetails, { new: true });
        res.status(200).send(updatedEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating event details' });
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
          last_modified,
          size,
          budget,
          status
        } = req.body;
        const event = {
            name,
            customer_id,
            deadline,
            place,
            type_of_event,
            description,
            date_proposed,
            last_modified,
            size,
            budget,
            status
          };


        // Create a new event
        const newEvent = new Event({
            name,
            customer_id,
            deadline,
            place,
            type_of_event,
            description,
            date_proposed,
            last_modified,
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

const getManageEvent = async (req, res) => {
    try {
        const { customerid } = req.params.customerid;
        const events = await Event.find( {$and: [{ customer_id: customerid }, { $or: [{status: "pending"}, {status: "open"}] }]});
        res.status(200).send(events);  
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}

const getHistoryEvent = async (req, res) => {
    try {
        const { customerid } = req.params.customerid;
        const events = await Event.find({$and: [{ customer_id: customerid }, { $or: [{status: "closed"}, {status: "rejected"}] }]});
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
    allOpenEvents,
    eventOpenDetail,
    eventUpdate,
    createEvent,
    getManageEvent,
    getHistoryEvent
}