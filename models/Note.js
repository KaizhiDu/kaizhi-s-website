const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    types: [],
    description: { type: String, default: "As the title show" },
    publishDate: { type: Date, default: Date.now },
    likes: [],
    comments: [
        {
            avatar: { type: String, required: true },
            name: { type: String, required: true },
            text: { type: String, required: true },
            date: { type: Date, default: Date.now },
            likes: [],
            secondComments: [
                {
                    avatar: { type: String, required: true },
                    name: { type: String, required: true },
                    text: { type: String, required: true },
                    date: { type: Date, default: Date.now }
                }
            ]
        }
    ]
});

module.exports = Notes = mongoose.model('note', NoteSchema);