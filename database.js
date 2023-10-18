const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.MONGODB_URI;

// Connect to the Database
const connectToDatabase = () => {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    mongoose.connection.on('connected', () => {
        console.log('Connected to DB successfully!');
    });
    mongoose.connection.on('error', (error) => {
        console.log('Error Connecting to DB', error);
    })
}


module.exports = { connectToDatabase };
