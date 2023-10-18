const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: String,
    password: String
})

// passport-local-mongoose: This module is a Mongoose plugin
// that simplifies user authentication and password management
// for Passport.js, a popular authentication library in Node.js.
// Automatically handles hashing and salting of password

userSchema.plugin(passportLocalMongoose);

const UserModel = mongoose.model('UserModel', userSchema);

module.exports = UserModel;