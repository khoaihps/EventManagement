const { Task } = require('../models/Event');

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

module.exports = {
    taskDetail,
    taskUpdate
}