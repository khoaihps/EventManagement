const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { createEvent } = require('../../controllers/event.controller');

const router = express.Router();

router.use(authenticateCustomer);

router.post('/event', createEvent)

module.exports = router;