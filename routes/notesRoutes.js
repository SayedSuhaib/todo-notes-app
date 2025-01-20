import express from 'express';
import { createNote, updateNote, getNotes, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

router.post('/notes', createNote);
router.put('/notes/:id', updateNote);
router.get('/notes', getNotes);
router.delete('/notes/:id', deleteNote);

export default router;