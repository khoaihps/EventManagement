const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { taskDetail, taskUpdate } = require("../../middlewares/task.middleware");
const { getManagerInfo, getAllEmployees } = require("../../middlewares/profile.middleware");
const router = express.Router();

router.use(authenticateManager);

router.get('/:managerID', getManagerInfo);
router.get("/:managerID/employees", getAllEmployees);
router.put('/:taskId/update', taskUpdate);

module.exports = router;