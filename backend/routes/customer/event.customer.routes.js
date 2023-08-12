const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { createEvent, getManageEvent, getHistoryEvent, eventDetail, deleteEvent } = require('../../middlewares/event.middleware');


const router = express.Router();

// router.use(authenticateCustomer);

router.post('/create', createEvent);
router.get('/manage-event/:customerID', getManageEvent);
router.get('/history-event/:customerID', getHistoryEvent);
router.get('/delete/:eventId', deleteEvent)
router.get('/:eventId', eventDetail)

module.exports = router;