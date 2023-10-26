const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;

const app = express();

app.get('/', (req, res) => {
    res.send('Node Docker API is live');
})

try {
   app.listen(port, () => {
        console.log(`Server live @ port ${port}`);
   });
} catch (err) {
    process.exit(1);
}