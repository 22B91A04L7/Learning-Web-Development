const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true })) // for form data parsing
app.use(express.json()) // for json data parsing

app.get('/tacos', (req, res) => {
    res.send("GET Request /tacos")
})

app.post('/tacos', (req, res) => {
    const { animal, qty } = req.body
    res.send(`Here are your ${qty} ${animal}s`)
})

app.get('/', (req, res) => {
    res.send("HOME PAGE..@!")
})
app.listen(3000, () => {
    console.log("Server Running at 3000");

})