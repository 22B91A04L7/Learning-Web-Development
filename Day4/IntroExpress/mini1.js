const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h2>Welcome to Student Portal</h2>')
})
app.get('/students', (req, res) => {
    res.send(`<span>
    <h2>List of Students</h2>
    <ol>
        <li>Venkat</li>
        <li>Purna</li>
        <li>Chandrika</li>
        <li>Revathi</li>
    </ol>
</span>`)
})

app.get('/students/:id', (req, res) => {
    const { id } = req.params
    const { q } = req.query
    if (q) {
        res.send(`You are seeing details of ${q} of ID ${id}`)
    }
    else {
        res.send(`Student ID: ${id}`)
    }
})

app.get('/students/:id/marks', (req, res) => {
    const { id } = req.params
    res.send(`Marks of Student ${id}`)
})

app.get('/about', (req, res) => {
    res.send(`<h1>About Page</h1>`)
})


app.get('/{*path}', (req, res) => {
    res.send('Invalid Route entered...!')
})
app.listen(8080, () => {
    console.log("Server running on 8080");
})