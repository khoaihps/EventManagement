const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { allEvents, eventDetail, allTaskOfEvent, eventUpdate } = require('../../middlewares/event.middleware');
const {getRegisteredAndUnregisteredEmployees } = require('../../middlewares/employees.middleware');
const router = express.Router();

router.use(authenticateManager);

router.get('/all', allEvents);
router.get('/:eventId', eventDetail);
router.get('/:eventId/task', allTaskOfEvent);
router.put('/:eventId/update', eventUpdate);
router.get('/:eventId/employees', getRegisteredAndUnregisteredEmployees)
module.exports = router;