const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { allEvents, eventDetail, allTaskOfEvent, eventUpdate } = require('../../middlewares/event.middleware');
const { taskDetail, taskUpdate } = require("../../middlewares/task.middleware");
const router = express.Router();

router.use(authenticateManager);

router.get('/all', allEvents);
router.get('/:eventId', eventDetail);
router.get('/:eventId/task', allTaskOfEvent);
router.put('/:eventId/update', eventUpdate);

router.get('/task/:taskId', taskDetail);
router.put('/task/:taskId/update', taskUpdate);

module.exports = router;