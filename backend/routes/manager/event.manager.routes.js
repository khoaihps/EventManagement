const { allEvents, eventDetail } = require('../../controllers/event.controller');
const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { allTaskOfEvent } = require('../../controllers/event.controller');
const router = express.Router();

router.use(authenticateManager);

router.get('/all', allEvents);
router.get('/:eventId', eventDetail);
router.get('/:eventId/task', allTaskOfEvent);

module.exports = router;