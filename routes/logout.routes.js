const express = require('express');
const logoutRouter = express.Router();

// Handles Logout Request
logoutRouter.get('/', (req, res) => {
    req.logout((error) => {
        if (error) {
            console.log(error);
        }
        res.redirect('/');
    });
});

module.exports = logoutRouter;