const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { taskDetail, taskUpdate } = require("../../middlewares/task.middleware");
const { getManagerInfo } = require("../../middlewares/profile.middleware");
const router = express.Router();

router.use(authenticateManager);

router.get('/:managerID', getManagerInfo);
router.put('/:taskId/update', taskUpdate);

module.exports = router;