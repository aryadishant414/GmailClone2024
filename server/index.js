import express from 'express';
import Connection from './database/db.js';

import 'dotenv/config'

const app = express();

const PORT = 8000;


// database connecting
Connection();


// backend server starting
app.listen(PORT, () => console.log("Server started successfully")
)
