import { Note } from "../models/Note.js";

// Create a new note
export const createNote = async (req, res) => {
    try {
        const { title, description } = req.body;
        const note = new Note({ title, description });
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Update an existing note
export const updateNote = async (req, res) => {
    try {
        const {id} = req.params;
        const { title, description } = req.body;
        const note = await Note.findByIdAndUpdate(id, { title, description }, { new: true });
        if (!note) return res.status(404).json({ message: 'Note not found' });
        res.json(note);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Retrieve all notes
export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

// Delete a specific note
export const deleteNote = async(req, res) => {
    try {
        const {id} = req.params;
        const note = await Note.findByIdAndDelete(id);
        if(!note) return res.status(404).json({message: 'Note not found'});
        res.json({message: 'Note deleted successfully'});
    } catch(err) {
        res.status(500).json({message: err.message});
    }
}