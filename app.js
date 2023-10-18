require('dotenv').config();
const express = require('express');
const passport = require('passport');           // Authentication
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');
const routes = require('./routes/routes');
const path = require('path');

const PORT = process.env.PORT || 3000;

const userModel = require('./models/User');
const database = require('./database');
const app = express();

// Serve Static Files from the Public Directory
app.use(express.static(path.join(__dirname, 'public')));

// Setup Flash
app.use(flash());


// Database Connection
database.connectToDatabase();

// App Configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 }                  // 24 Hours
}))

// Initialize and Use the Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Use the userModel to create the strategy
passport.use(userModel.createStrategy());

// Serialize and Deserialize the User Object to and from the Session
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    userModel.findOne({ username: user.username })
        .then(user => {
            done(null, user);
        })
        .catch ((error) => done(error));
})

// View Setup
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send('Internal Server Error. Please try again later.');
    next();
});

// Custom Middleware to Extract and Store the Username
app.use((req, res, next) => {
    const username = req.session.username;
    if (username) {
        req.username = username;
    }
    next();
});

// Define the Base Path for Routes
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})