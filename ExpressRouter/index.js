const express = require('express');
const app = express();

app.get("/greet", (req, res) => {
    res.send("Hello !!")
})
app.get("/", (req, res) => {
    res.send("Home page !")
})
app.get("/setname", (req, res) => {
    res.cookie("name", "venkat")
    res.cookie("adminName", "veera")
    res.send("Cookie sent!!")

})

app.listen(3000, (req, res) => {
    console.log("Running");

})