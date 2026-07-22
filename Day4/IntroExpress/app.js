const express = require('express')

const app = express()

app.use((req, res) => {
    res.send('<h3> This is response...!!! </h3>')

})

app.listen(3000, () => {
    console.log("Server is running on 3000");

})