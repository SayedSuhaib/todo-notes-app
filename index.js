import express from 'express';
import bodyParser from 'body-parser';
import {connectDB} from './config/db.js';
import notesRoutes from './routes/notesRoutes.js'

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', notesRoutes);

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
});