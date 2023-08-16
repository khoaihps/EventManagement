const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { taskDetail, taskUpdate, assignedEmployees } = require("../../middlewares/task.middleware");
const router = express.Router();

router.use(authenticateManager);

router.get('/:taskId', taskDetail);
router.get("/:taskId/employees", assignedEmployees);
router.put('/:taskId/update', taskUpdate);

module.exports = router;