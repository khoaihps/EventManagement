const express = require('express');
const router = express.Router();
const { Event } = require('../models/Event');

// Route để hiển thị danh sách các event
router.post('/', async (req, res) => {
    try {
        // Lấy tất cả các event từ database
        const events = await Event.find();

        // Trả về danh sách các event dưới dạng JSON
        res.json(events);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch events.' });
    }
});

// Route để hiển thị thông tin của một sự kiện dựa vào id
router.get('/:eventId', async (req, res) => {
    try {
        const eventId = req.params.eventId;

        // Tìm sự kiện dựa vào eventId trong database
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found.' });
        }

        // Trả về thông tin của sự kiện dưới dạng JSON
        res.json(event);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch event.' });
    }
});

module.exports = router;