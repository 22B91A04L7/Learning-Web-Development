const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/students', (req, res) => {
    const student = {
        name: "Venkat",
        rollNo: "22051A04A5",
        branch: "ECE"
    }
    res.render('students', student)
})

app.get('/student/:name', (req, res) => {
    const { name } = req.params
    res.render('student', { name: name })
})

app.listen(8080, () => {
    console.log("Server Running on 8080");

})