const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { allEvents, eventDetail, allTaskOfEvent, eventUpdate, eventRegisterAdding, eventRegisterRemoving } = require('../../middlewares/event.middleware');
const {getRegisteredAndUnregisteredEmployees, getRegisteredEmployees, getUnregisteredEmployees } = require('../../middlewares/employees.middleware');
const router = express.Router();

router.use(authenticateManager);

router.get('/all', allEvents);
router.get('/:eventId', eventDetail);
router.get('/:eventId/task', allTaskOfEvent);
router.get('/:eventId/employees', getRegisteredAndUnregisteredEmployees);
router.get('/:eventId/remployees', getRegisteredEmployees);
router.get('/:eventId/uremployees', getUnregisteredEmployees);

router.put('/:eventId/update', eventUpdate);

router.post('/:eventId/eventregister/add', eventRegisterAdding);

router.delete('/:eventId/eventregister/remove', eventRegisterRemoving)


module.exports = router;