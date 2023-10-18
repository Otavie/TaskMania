const express = require('express');
const editTaskRoute = express.Router();
const taskModel = require('../models/Task');

editTaskRoute.get('/:id', async(req, res) => {
    try {
        const taskId = req.params.id;
        const taskToEdit = await taskModel.findById(taskId);

        if (!taskToEdit) {
            return res.status(404).json({ error: 'Task not found!' });
        }
        
        res.status(200).render('edit', {
            title: 'Edit Task',
            links: [{ link_name: 'Logout', url: '/logout' }],
            task: taskToEdit,
            message: {},
            req: req,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to edit the task!' })
    }
});

editTaskRoute.post('/:id', async(req, res) => {
    try {
        const taskId = req.params.id;
        const { title, description, state } = req.body;

        const updatedTask = await taskModel.findByIdAndUpdate(
            taskId,
            { title, description, state },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ error: 'Task not found!' });
        }

        res.redirect('/tasks')

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update the task!' });
    }
})

module.exports = editTaskRoute;