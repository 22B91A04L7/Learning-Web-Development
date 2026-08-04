const { log } = require('console');
const express = require('express')
const app = express()
const path = require('path');
const { v4: newID } = require('uuid')
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true })) // for form data parsing
app.use(express.json()) // for json data parsing
app.use(methodOverride('_method')) // to use post and get requests as other HTTP request
app.set('views', path.join(__dirname, 'views')) //for using .ejs files
app.set('view engine', 'ejs') // telling express to use ejs

//dummy database
let comments = [
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

//GET to render form for update route
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

//update route to edit the comment using PATCH 
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id)
    foundComment.comment = newComment
    res.redirect('/comments')
})

//DELETE end point to delete comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments')
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen('3000', () => {
    console.log("Server running on 3000");

})