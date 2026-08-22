const express = require('express');
const app = express();
const morgan = require("morgan")

app.use(morgan('tiny'));
app.use((req, res, next) => {
    console.log("THIS IS FIRST MIDDLEWARE!");
    return next();
    console.log("FINAL");

})
app.use((req, res, next) => {
    console.log("THIS IS SECOND MIDDLEWARE!");
    next();
    console.log("FINAL 222");
})

app.get("/", (req, res) => {
    res.send("HOME PAGE !!")
})

app.get("/dogs", (req, res) => {
    res.send("BOW BOW!")
})

app.listen(3000, () => {
    console.log("Server running on PORT 3000");
})