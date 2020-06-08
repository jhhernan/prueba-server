const mongoose = require('mongoose');

 const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
 } 

function initDatabase(){ 
    mongoose.connect(process.env.MONGO_URL, options);

    const {connection} = mongoose;

    connection.once("open", () => console.log("DB connection established..."));
    connection.on("error", (err) => console.log("Error: ",err));
}




module.exports = initDatabase;