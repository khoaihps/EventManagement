const { Task, TaskAssign } = require('../models/Event');

const taskDetail = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        // Tìm task dựa vào taskId trong database
        const taskDetail = await Task.findById(taskId);

        if (!taskDetail) {
            return res.status(404).json({ message: 'Task not found.' });
        }
        res.status(200).send(taskDetail);
    } catch (error) {
        console.log("Error", error);
        res.status(500).json({ message: 'Failed to fetch.' });
    }
}

const taskUpdate = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const updatedTaskDetails = req.body;

        const updatedTask = await Task.findByIdAndUpdate(taskId, updatedTaskDetails, { new: true });
        res.status(200).send(updatedTask);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating event details' });
    }
}

const assignedEmployees = async (req, res) => {
    try {
        const taskId = req.params.taskId;

        // Find all event registers for the given eventId and populate 't_member_id' field
        const taskAssigns = await TaskAssign.find({ task_id: taskId }).populate('t_member_id');

        // Get an array of registered employee IDs

        const assignedEmployees = taskAssigns.map(TaskAssign => TaskAssign.t_member_id);

        res.json(assignedEmployees);
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    taskDetail,
    taskUpdate,
    assignedEmployees
}