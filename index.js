const express = require('express');
const app = express();
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 4000;

app.use('/', (req, res) => {
    res.send("Hello from server side")
})

app.listen(PORT, () => {
    console.log(`Le server est fonctionnel sur le port ${PORT}`)
})