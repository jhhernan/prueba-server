require('dotenv').config();
const express = require("express");
const cors = require("cors");
const initDatabase = require('./src/db.js');
const userRouter = require('./src/routes/user');
const voteRouter = require('./src/routes/vote');

const app = express();


initDatabase();


app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    response.status(200).json("Testing");
});

app.use("/users", userRouter);
app.use("/votes", voteRouter);

const port =  3001; 
app.listen(port, () => console.log(`Listening on port ${port}`)) ;