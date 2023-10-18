const express = require('express');
const router = express.Router();
const connectEnsureLogin = require('connect-ensure-login')  // Authorization Middleware

// Include Routes from the Separate Files
const indexRoute = require('./index.routes');
const tasksRoute = require('./tasks.routes');
const authLoginRoute = require('./auth.login.routes');
const authSignupRoute = require('./auth.signup.routes');
const logoutRoute = require('./logout.routes');
const editRoute = require('./tasks.edit.routes');
const deleteRoute = require('./task.delete.routes');



// Define All the Routes
router.use('/', indexRoute);
router.use('/tasks', connectEnsureLogin.ensureLoggedIn(), tasksRoute);
router.use('/signup', authSignupRoute);
router.use('/login', authLoginRoute);
router.use('/logout', logoutRoute);
router.use('/edit', editRoute);
router.use('/delete', deleteRoute);


module.exports = router;