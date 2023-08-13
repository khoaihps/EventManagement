const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { createEvent } = require('../../middlewares/event.middleware');

const router = express.Router();

// router.use(authenticateCustomer);

router.post('/create', createEvent);

module.exports = router;