const express = require('express');
const Event = require('../models/Event');

const router = express.Router();

router.post('/customer', async (req, res) => {
    try {
        const {
          name,
          customer_id,
          deadline,
          place,
          type_of_event,
          description,
          date_proposed,
          status,
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
          status,
        });
    
        // Save the event to the database
        await newEvent.save();
    
        res.status(201).json({ message: 'Event created successfully', event: newEvent });
      } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'An error occurred during event creation' });
      }
});

module.exports = router