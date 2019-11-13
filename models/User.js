const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    avatar: {type: String},
    date: {type: String, default: Date.now}
});

module.exports = User = mongoose.model('user', UserSchema);