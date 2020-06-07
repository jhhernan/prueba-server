require('dotenv').config();
const express = require("express");
const initDatabase = require('./src/db.js');

const app = express();


initDatabase();


app.use(express.json());


app.get('/', (request, response) => {
    response.status(200).json("Testing");
});



const port =  3001; 
app.listen(port, () => console.log(`Listening on port ${port}`)) ;