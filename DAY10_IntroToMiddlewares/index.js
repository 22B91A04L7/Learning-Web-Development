const express = require('express');
const app = express();
const morgan = require("morgan")

app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.send("HOME PAGE !!")
})

app.get("/dogs", (req, res) => {
    res.send("BOW BOW!")
})

app.listen(3000, () => {
    console.log("Server running on PORT 3000");
})