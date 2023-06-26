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
router.post('/addnote', fetchuser, [
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


// Route 3:  Updating the existing notes:  PUT "/api/notes/updatenote". : login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        //  creating a new note object
        const newNote = {};

        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        //   find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") };

        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") };

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }


})

/// Route 3:  Deleting the existing notes:  DELETE "/api/notes/deletenote". : login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;
    
        //   find the note to be deleted and delete it
        let note = await Notes.findById(req.params.id);
        if (!note) { return res.status(404).send("Not found") };

        // only allow deletion if user owns this note        
        if (note.user.toString() !== req.user.id) { return res.status(401).send("Not allowed") };

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "sucess":"The note has been delete", note: note });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");

    }


})

module.exports = router;

