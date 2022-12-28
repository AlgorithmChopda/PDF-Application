import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import add_default_data from './controller/default-data.js';
import { admin_login, user_login } from './controller/login.js';
import addEntry from './controller/addEntry.js';
import generate_pdf from './controller/pdf_generate.js';
import getMember from './controller/getMembers.js'
import getentry from './controller/getentry.js';

dotenv.config();

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// api-endpoints
app.get('/add-default-data', add_default_data);
app.post('/user-login', user_login);
app.post('/admin-login', admin_login);
app.post('/add-entry', addEntry);
app.post('/generate-pdf', generate_pdf);
app.post('/fetch-all-members', getMember);
app.post('/get-all-entry', getentry)

app.get('/', (req, res) => {
    res.send("It's working");
});


const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

// connecting to database
mongoose.set("strictQuery", false);
mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message));