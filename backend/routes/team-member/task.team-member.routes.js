const express = require("express");
const { authenticateEmployee } = require('../../middlewares/auth.middleware');
const { assignedEmployees } = require("../../middlewares/task.middleware");
const router = express.Router();

router.use(authenticateEmployee);

router.get("/:taskId/employees", assignedEmployees);

module.exports = router;