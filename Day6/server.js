const { log } = require('console');
const express = require('express')
const app = express()
const path = require('path');
const { v4: newID } = require('uuid')

app.use(express.urlencoded({ extended: true })) // for form data parsing
app.use(express.json()) // for json data parsing

app.set('views', path.join(__dirname, 'views')) //for using .ejs files
app.set('view engine', 'ejs') // telling express to use ejs

//dummy database
const comments = [
    {
        id: newID(),
        username: 'Venkat',
        comment: "Hiii Im venkat"
    },
    {
        id: newID(),
        username: "Veera",
        comment: "Hello Im Commenting..!"
    },
    {
        id: newID(),
        username: "Pawan",
        comment: "Deputy CM OF AP"
    },
    {
        id: newID(),
        username: "Tom",
        comment: "Just Watched BRAND NEW DAY"
    }
]

//get the comments --> index
app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
})

// get request to render form to post new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/newComment')
})

//post a new comment --> New
app.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = newID();
    comments.push(newComment);
    res.redirect('/comments')
})

//show route --> view comment using id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen('3000', () => {
    console.log("Server running on 3000");

})