const express = require('express');
const taskRoute = express.Router();
const taskModel = require('../models/Task');
const userModel = require('../models/User');

// Retrieve Task Page
taskRoute.get('/', async (req, res) => {
    try {
        const userId = req.user._id;
        const filterState = req.query.state || 'all';

        let userTasks;

        if (filterState === 'all') {
            userTasks = await taskModel.find({ userId });
        } else {
            userTasks = await taskModel.find({ userId, state: filterState })
        }

        const name = req.user.firstName;

        // Check if Success Message is Present in the Session and Display
        const successMessage = req.session.successMessage;

        // Clear the Success Message from the Session to Avoid it Being Displayed
        req.session.successMessage = null;
    
        res.status(200).render('tasks', {
            title: "Task",
            links: [ { link_name: 'Logout', url: '/logout' }],
            displayedName: name,
            message: {
                success: successMessage,
            },
            req: req,
            tasks: userTasks,
            selectedState: filterState
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error!');
    }
})

// Route for Adding Task
taskRoute.post('/', async (req, res) => {
    const name = req.user.firstName;

    try {
        // Get Details from the Body of the Request
        const { title, description, state } = req.body;

        // Default State is Pending
        const entryState = state || "Pending";

        // Retrieve Username from the Session
        const username = req.user.username;

        // Find User by Username
        const user = await userModel.findOne({ username: username });
        const userId = user._id;

        if (!user) {
            return res.status(404).json({ error: 'User Not Found!' })
        }
        
        // Create a New Task Using the Task Model
        const newTask = new taskModel({ title, description, state: entryState, userId: userId });
        await newTask.save();

        req.session.successMessage = 'Task created successfully!';
        
        res.redirect('/tasks');

    } catch (error) {
        console.error(error);
        res.status(500).render('tasks', {
            title: 'Task',
            links: [{ link_name: 'Logout', url: '/logout' }],
            displayedName: name,
            message: { error: 'Failed to create the task!' },
            req: req
        })
    }
})


module.exports = taskRoute;