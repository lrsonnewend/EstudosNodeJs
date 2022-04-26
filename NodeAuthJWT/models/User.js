const mongoose = require('mongoose');

//build schema
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    pass: {
        type: String,
        required: true,
        minlength: 4
    }
});

//build model
const User = mongoose.model('user', userSchema);

module.exports = User;