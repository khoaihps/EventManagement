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

const taskCreating = async (req, res) => {
    try {
        const taskDetails = req.body;
        const newTask = new Task({
            name: taskDetails.name,
            deadline: taskDetails.deadline,
            budget: taskDetails.budget,
            description: taskDetails.description,
            department_involved: taskDetails.department_involved,
            event_id: taskDetails.event_id,
            status: taskDetails.status
        });

        // Save the new task to the database
        const savedTask = await newTask.save();
        res.status(200).json({ message: 'Task created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}
const taskDeleting = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        console.log(taskId);
        const deletedTask = await Task.findByIdAndDelete(taskId);

        if (!deletedTask) {
            return res.status(201).json({ message: 'Task not found' });
        }
        return res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete task' });
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
        res.status(500).json({ message: 'Error updating task details.' });
    }
}

const assignedEmployees = async (req, res) => {
    try {
        const taskId = req.params.taskId;

        // Find all event registers for the given eventId and populate 't_member_id' field
        const taskAssigns = await TaskAssign.find({ task_id: taskId }).populate('t_member_id');

        // Get an array of registered employee IDs

        const assignedEmployees = taskAssigns.map(TaskAssign => TaskAssign.t_member_id);

        res.status(200).json(assignedEmployees);
    } catch (error) {
        console.error(error);
    }
}

const taskAssignAdding = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const t_member_id = req.body.t_member_id;
        const existingTaskAssign = await TaskAssign.findOne({ task_id: taskId, t_member_id: t_member_id });
        
        if (existingTaskAssign) {
            return res.status(200).json(existingTaskAssign);
        }

        const newTaskAssign = new TaskAssign({
            task_id: taskId,
            t_member_id: t_member_id
        });

        await newTaskAssign.save();

        res.status(201).json(newTaskAssign);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add task assignment.' });
    }
}
const taskAssignRemoving = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const t_member_id = req.body.t_member_id;

        const existingTaskAssign = await TaskAssign.findOneAndDelete({ task_id: taskId, t_member_id: t_member_id });

        if (existingTaskAssign) {
            res.status(200).json(existingTaskAssign);
        } else {
            res.status(201).json({ message: 'Task assignment not found.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to remove task assignment.' });
    }
}
module.exports = {
    taskDetail,
    taskCreating,
    taskDeleting,
    taskUpdate,
    assignedEmployees,
    taskAssignAdding,
    taskAssignRemoving
}