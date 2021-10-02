const express = require('express');
const dotenv = require('dotenv').config();
const app = express();
const port = process.env.PORT;
const dbConn = require("./config/dbconn");

app.get("/", (req, res) => {
    res.send("Welcome to my awesome Node_Docker application...I am just Making a simple test on dockerizing node.js application")
})

app.listen(port, (err, connected) => {
    if (err) {
        console.log(`Error connecting to port ${port}`)
    } else {
        console.log(`App connected and listening to port ${port}`)
    }
})
