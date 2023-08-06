const express = require('express');
const { authenticateCustomer } = require('../../middlewares/auth.middleware');
const { createEvent, getManageEvent, getHistoryEvent, eventDetail } = require('../../middlewares/event.middleware');


const router = express.Router();

// router.use(authenticateCustomer);

router.post('/create', createEvent);
router.get('/manage-event', getManageEvent);
router.get('/history-event', getHistoryEvent);
router.get('/:eventID', eventDetail)

module.exports = router;