const express = require('express');
const passport = require('passport');
const authLoginRouter = express.Router();

// Renders Login Page
authLoginRouter.get('/', (req, res) => {
    const navLinks = [
        { link_name: 'Home', url: '/' },
        { link_name: 'Sign Up', url: '/signup' }
    ]

    res.status(200).render('login', {
        title: "Login",
        links: navLinks,
        message: req.flash('error'),
        req: req,
    });
});

// Handle Login Request for Existing User
authLoginRouter.post('/', (req, res, next) => {
    passport.authenticate('local', (error, user, info) => {
        
        // Store the Username in the Session
        req.session.username = user.username;

        if (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }

        if (!user) {
            const navLinks = [
                { link_name: 'Home', url: '/' },
                { link_name: 'Login', url: '/login' },
                { link_name: 'Sign Up', url: '/signup' }
            ];

            return res.status(400).render('login', {
                title: 'Login',
                message: { error: 'Invalid Username or Password!' },
                links: navLinks,
                req: req
            });
        }

        req.login(user, (loginError) => {
            if (loginError) {
                console.log(loginError);
                return res.status(500).send('Internal Server Error');
            }
            res.redirect('/tasks');
        });
    })(req, res, next);
});

module.exports = authLoginRouter;
