const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
var url = process.env.LOCAL_DB;

const conn = mongoose.connect(url, { useNewUrlParser: true, 
	useUnifiedTopology: true })
	.then(() => console.log("Database successfully connected"))
	.catch(err => {
        console.log('error in database connection')
        console.log(err)
    })


module.exports = conn;