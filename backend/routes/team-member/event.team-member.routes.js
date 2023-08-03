const { allEvents, eventDetail, allOpenEvents, eventOpenDetail } = require('../../controllers/event.controller');
const express = require("express");
const { authenticateEmployee } = require('../../middlewares/auth.middleware');
const { allTaskOfEvent } = require('../../controllers/event.controller');
const router = express.Router();

router.use(authenticateEmployee);

router.get('/all', allOpenEvents);
router.get('/:eventId', eventOpenDetail);
router.get('/:eventId/task', allTaskOfEvent);

module.exports = router;