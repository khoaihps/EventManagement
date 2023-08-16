const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { allEvents, eventDetail, allTaskOfEvent } = require('../../middlewares/event.middleware');
const router = express.Router();

router.use(authenticateManager);

router.get('/all', allEvents);
router.get('/:eventId', eventDetail);
router.get('/:eventId/task', allTaskOfEvent);

module.exports = router;