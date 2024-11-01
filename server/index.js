import express from 'express';
import Connection from './database/db.js';
import 'dotenv/config'
import router from './routes/route.js';
import cors from 'cors';

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', router);


const PORT = 8000;


// database connecting
Connection();


// backend server starting
app.listen(PORT, () => console.log("Server started successfully")
)
