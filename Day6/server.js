const express = require('express')
const app = express()
const path = require('path');

app.use(express.urlencoded({ extended: true })) // for form data parsing
app.use(express.json()) // for json data parsing

app.set('views', path.join(__dirname, 'views')) //for using .ejs files
app.set('view engine', 'ejs') // telling express to use ejs

//dummy database
const comments = [
    {
        username: 'Venkat',
        comment: "Hiii Im venkat"
    },
    {
        username: "Veera",
        comment: "Hello Im Commenting..!"
    },
    {
        username: "Pawan",
        comment: "Deputy CM OF AP"
    },
    {
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
    comments.push(newComment);
    res.redirect('/comments')
})

app.get('/', (req, res) => {
    res.send("Home Page")
})

app.listen('3000', () => {
    console.log("Server running on 3000");

})