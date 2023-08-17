const express = require("express");
const { authenticateEmployee } = require('../../middlewares/auth.middleware');
const { getEmployeeInfo } = require("../../middlewares/profile.middleware");
const router = express.Router();

router.use(authenticateEmployee);

router.get('/:employeeID', getEmployeeInfo);

module.exports = router;