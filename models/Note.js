const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    types: [],
    description: { type: String, default: "As the title show" },
    publishDate: { type: Date, default: Date.now },
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            }
        }
    ],
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'users'
            },
            text: { type: String, required: true },
            date: { type: Date, default: Date.now },
            secondComment: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'users'
                    },
                    text: { type: String, required: true },
                    date: { type: Date, default: Date.now }
                }
            ]
        }
    ]
});

module.exports = Notes = mongoose.model('note', NoteSchema);