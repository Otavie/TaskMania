const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',                            // Reference to the User Model for Associating Tasks with Users
        required: true
    },
});

const TaskModel = mongoose.model('TaskModel', taskSchema);

module.exports = TaskModel;