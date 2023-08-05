const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Event Schema
const eventSchema = new Schema({
    name: { type: String, required: true },
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    deadline: { type: Date, required: true },
    place: { type: String, required: true },
    type_of_event: {
      type: String,
      enum: ['Social', 'Educational', 'Community', 'Cultural Events'],
      required: true
    },
    description: { type: String, required: true },
    date_proposed: { type: Date, required: true },
    last_modified: { type: Date, default: Date.now },
    size: { 
        type: String, 
        enum: ['Small','Medium','Large','Mega'],
        required: true },
    budget: { type: Number, required: true},
    status: {
        type: String,
        enum: ['pending', 'preparing', 'completed', 'cancelled'],
        required: true
    }
});

// Task Schema
const taskSchema = new Schema({
    name: { type: String, required: true },
    deadline: { type: Date, required: true },
    budget: { type: Number, required: true },
    description: { type: String, required: true },
    department_involved: { type: String, required: true },
    event_id: { type: Schema.Types.ObjectId, ref: 'Event', required: true }
});

// Task Assign Schema
const taskAssignSchema = new Schema({
    task_id: { type: Schema.Types.ObjectId, ref: 'Task', required: true },
    t_member_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true }
});

// Event Register Schema
const eventRegisterSchema = new Schema({
    event_id: { type: Schema.Types.ObjectId, ref: 'Event', required: true },
    t_member_id: { type: Schema.Types.ObjectId, ref: 'Employee', required: true }
});


const Event = mongoose.model('Event', eventSchema);
const Task = mongoose.model('Task', taskSchema);
const TaskAssign = mongoose.model('TaskAssign', taskAssignSchema);
const EventRegister = mongoose.model('EventRegister', eventRegisterSchema);

module.exports = {
    Event,
    Task,
    TaskAssign,
    EventRegister
};

