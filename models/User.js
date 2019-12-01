const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    googleId: {type: String},
    password: { type: String },
    avatar: {type: String},
    date: {type: String, default: Date.now}
});

module.exports = User = mongoose.model('user', UserSchema);