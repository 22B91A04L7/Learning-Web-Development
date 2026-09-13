const express = require('express');
const app = express();
const cookiePraser = require("cookie-parser") //package to parse the cookies

app.use(cookiePraser())

app.get("/greet", (req, res) => {
    const { name = "unknown" } = req.cookies
    res.send(`Hello, ${name}`)
})


app.get("/", (req, res) => {
    res.send("Home page !")
})
app.get("/setname", (req, res) => {
    // res.cookie("name", "venkat")
    res.cookie("adminName", "veera")
    res.send("Cookie sent!!")

})

app.listen(3000, (req, res) => {
    console.log("Running");

})