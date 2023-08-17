const express = require("express");
const { authenticateManager } = require('../../middlewares/auth.middleware');
const { taskDetail, taskUpdate, assignedEmployees, taskAssignAdding, taskAssignRemoving, taskCreating, taskDeleting } = require("../../middlewares/task.middleware");
const router = express.Router();

router.use(authenticateManager);

router.get('/:taskId', taskDetail);
router.get("/:taskId/employees", assignedEmployees);
router.put('/:taskId/update', taskUpdate);

router.post("/create", taskCreating);
router.post('/:taskId/taskassign/add', taskAssignAdding);

router.delete('/:taskId/delete', taskDeleting);
router.delete('/:taskId/taskassign/remove', taskAssignRemoving);
module.exports = router;