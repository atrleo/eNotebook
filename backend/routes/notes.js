const express = require('express');
var fetchuser = require('../middleware/fetchuser');
const Notes = require('../models/Notes');
const { body, validationResult } = require('express-validator');

const router = express.Router()


// Route 1:  Get all the notes:  GET "/api/notes/fetchallnotes". : login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {

    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }


})


// Route 2:  Add a new notes: POST "/api/notes/addnote". :login required
router.get('/addnote', fetchuser, [
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'description must be atleast 5 character').isLength({ min: 5 }),

], async (req, res) => {
    try {

        const { title, description, tag } = req.body;

        // If there are errors, return errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            title, description, tag, user: req.user.id
        })

        const saveNote = await note.save();
        res.json(saveNote);


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }

})
module.exports = router; 