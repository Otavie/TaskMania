const express = require('express');
const passport = require('passport');
const userModel = require('../models/User')
const authSignupRouter = express.Router();
const flash = require('express-flash');

const trimInputValues = (req, res, next) => {
    req.body.firstName = req.body.firstName.trim();
    req.body.lastName = req.body.lastName.trim();
    req.body.username = req.body.username.trim();
    req.body.email = req.body.email.trim();
    next();
}

// Renders User Registration Page
authSignupRouter.get('/', (req, res) => {
    const navLinks = [
        { link_name: 'Home', url: '/' },
        { link_name: 'Login', url: '/login' },
    ]

    const { firstName, lastName, username, email } = req.query;
    const missingInput = !firstName || !lastName || !username || !email;

    res.status(200).render('signup', {
        title: "Sign Up",
        message: req.flash('error'),
        links: navLinks,
        req: req,
        
        firstName: missingInput ? firstName : '',
        lastName: missingInput ? lastName : '',
        username: missingInput ? username : '',
        email: missingInput ? email : ''
    });
})

// Handles signup Request From the User
authSignupRouter.post('/', trimInputValues, (req, res) => {
    const navLinks = [
        { link_name: 'Home', url: '/' },
        { link_name: 'Login', url: '/Login' },
        { link_name: 'Sign Up', url: '/Sign Up' },
    ]

    // Extract User Details from the Body of the Request
    const { firstName, lastName, username, email, password } = req.body;

    // Check if First Name or Last Name Cannot be Empty
    if (firstName === '' || lastName === '') {
        return res.status(400).render('signup', {
            title: 'Sign Up',
            message: { error: 'First name or last name cannot be empty!' },
            links: navLinks,
            firstName,
            lastName,
            username,
            email
        })
    }

    // Create a New User Instance that will Used for Registration
    const newUser = new userModel({ firstName, lastName, username, email });

    // signup the New User Using Passport Local Mongoose
    userModel.register(newUser, password, (error, user) => {
        if (error) {
            console.log(error);

            if (error.name === 'UserExistsError') {
                return res.status(400).render('signup', {
                    title: 'signup',
                    message: { error: 'Username or email already exist!' },
                    links: navLinks,
                    firstName,
                    lastName,
                    username,
                    email
                });
            } else if (error.name === 'MissingUsernameError') {
                return res.status(400).render('signup', {
                    title: 'signup',
                    message: { error: 'No username was given!' },
                    links: navLinks,
                    firstName,
                    lastName,
                    username,
                    email
                });
            } else if (error.name === 'MissingPasswordError') {
                return res.status(400).render('signup', {
                    title: 'signup',
                    message: { error: 'No password was given!' },
                    links: navLinks,
                    firstName,
                    lastName,
                    username,
                    email
                });
            }
            return;
        }

        passport.authenticate('local')(req, res, () => {
            res.redirect('/tasks');
        })
    })
});

module.exports = authSignupRouter;