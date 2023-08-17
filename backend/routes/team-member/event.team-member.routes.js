const {allOpenEvents, eventOpenDetail, allTaskOfEvent, eventRegisterAdding } = require('../../middlewares/event.middleware');
const express = require("express");
const { authenticateEmployee } = require('../../middlewares/auth.middleware');
const router = express.Router();

router.use(authenticateEmployee);

router.get('/all', allOpenEvents);
router.get('/:eventId', eventOpenDetail);
router.get('/:eventId/task', allTaskOfEvent);

router.post('/:eventId/eventregister/add', eventRegisterAdding);

module.exports = router;