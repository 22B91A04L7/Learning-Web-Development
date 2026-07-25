const express = require('express')

const app = express()

// app.use((req, res) => {
//     res.send('<h3> This is response...!!! </h3>')

// })

app.get('/', (req, res) => {
    res.send('<h1> This is Home Page...!!! </h1>')
})

app.get('/cats', (req, res) => {
    res.send("Hii , Im Cat MEOW MEOW !!!")
})

app.get('/dogs', (req, res) => {
    res.send("Hii Im A DOG BOW BOW !!!")
})

app.get('/r/:reddit', (req, res) => {
    const { reddit } = req.params;
    res.send(`<h2> Welcome to ${reddit} Page<h2/>`)
})

app.get('/r/:reddit/:postId', (req, res) => {
    const { reddit, postId } = req.params
    res.send(`<h2> Welcome to ${reddit} Page you are visiting post ${postId}<h2/>`)
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h2> Hiiiii fine ${q}<h2/>`)
})

app.get('/{*path}', (req, res, next) => {
    res.send('<h1>Hiii This is Home Page</h1>')
})


app.post('/dogs', (req, res) => {
    res.send("Hii this is POst Request !!!")
})


app.listen(3000, () => {
    console.log("Server is running on 3000");

})