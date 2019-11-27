const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator/check");

// Notes Schema
const Note = require('../../models/Note');
const User = require('../../models/User');

// router POST api/note
// create a note
router.post('/', [
        check('title', 'title is required').not().isEmpty(),
        check('content', 'content is required').not().isEmpty(),
        check('types', 'type is required').not().isEmpty()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const { title, content, types, publishDate, description } = req.body;
            let saveType = [];
            types.split(',').map(type => {
                saveType.push(type.trim());
            });
            const newNote = new Note({ title, content, types: saveType, publishDate, description });
            const note = await newNote.save();
            await res.json(note);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server error');
        }
    }
)
;

// router GET api/note/all
// get all the notes
router.get('/all', async (req, res) => {
    try {
        const notes = await Note.find().sort({ publishDate: -1 });
        await res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// router POST api/note/all/page
// get all the notes with Pagination
router.post('/all/page', async (req, res) => {
    try {
        const notes = await Note.find().sort({ publishDate: -1 }).skip(req.body.skip).limit(req.body.limit);
        await res.json(notes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// router GET api/note/:id
// get note by note id
router.get('/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(500).send("No note found");
        }
        await res.json(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// router PUT api/note/comment/:id/:userId
// update the comment of note
router.put('/comment/:id/:userId', async (req, res) => {
    try {
        const text = req.body.content;
        const user = await User.findById(req.params.userId);
        let note = await Note.findById(req.params.id);
        const comments = {
            avatar: user.avatar,
            name: user.name,
            text,
            secondComments: [],
            likes: []
        };
        note.comments.push(comments);
        note = await note.save();
        res.send(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// router PUT api/note/comment/like/:noteId/:commentId/:userId
// like a comment
router.put('/comment/like/:noteId/:commentId/:userId', async (req, res) => {
    try {
        let note = await Note.findById(req.params.noteId);
        const comments = note.comments;
        comments.map(comment => {
            if (comment._id == req.params.commentId) {
                comment.likes.push(req.params.userId);
            }
        });
        note = await note.save();
        res.send(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// router PUT api/note/comment/like/:noteId/:commentId/:userId
// cancel like a comment
router.put('/comment/unlike/:noteId/:commentId/:userId', async (req, res) => {
    try {
        let note = await Note.findById(req.params.noteId);
        const comments = note.comments;
        comments.map(comment => {
            if (comment._id == req.params.commentId) {
                comment.likes.remove(req.params.userId);
            }
        });
        console.log(note);
        note = await note.save();
        res.send(note);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;