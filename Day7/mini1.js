// notes crud app mini project
const { log } = require("console");
const express = require("express")
const app = express();
const path = require('path')
const { v4: uuid } = require('uuid')
const methodOverride = require('method-override')

app.set('views', path.join(__dirname, 'views')) //for using .ejs files
app.set('view engine', 'ejs') // telling express to use ejs

app.use(express.urlencoded({ extended: true })) // for form data parsing
app.use(express.json()) // for json data parsing

app.use(methodOverride('_method')) // to use post and get requests as other HTTP request

let notes = [
    {
        id: uuid(),
        title: "Learn Express",
        content: "Complete RESTful routing and understand req.params and req.body."
    },
    {
        id: uuid(),
        title: "Practice DSA",
        content: "Solve one Dynamic Programming problem from Striver's sheet."
    },
    {
        id: uuid(),
        title: "System Design",
        content: "Revise Strategy Pattern and implement it from scratch."
    },
]

//index route to display notes
app.get('/notes', (req, res) => {
    res.render('show', { notes })
})

//get --> to render the form for creating ne notes
app.get('/notes/new', (req, res) => {
    res.render('newNote')
})

// add route to add new notes
app.post('/notes', (req, res) => {
    const id = uuid();
    const { title, content } = req.body
    const newNotes = { id, title, content }
    notes.push(newNotes)
    res.redirect('/notes')
})

//to view individual notes
app.get('/notes/:id', (req, res) => {
    const { id } = req.params
    const foundNotes = notes.find(n => n.id === id)
    res.render('viewNote', { foundNotes })
})

// get to render form to update notes using patch
app.get('/notes/:id/edit', (req, res) => {
    const { id } = req.params;
    const foundNotes = notes.find(n => n.id === id)
    res.render('editNotes', { foundNotes })
})
//patch request to edit the notes content
app.patch('/notes/:id', (req, res) => {
    const { id } = req.params
    const foundNotes = notes.find(n => n.id === id)
    const { title, content } = req.body
    foundNotes.title = title
    foundNotes.content = content
    res.redirect(`/notes/${id}`)
})

//delete route to delete note with id
app.delete('/notes/:id', (req, res) => {
    const { id } = req.params
    const newNotes = notes.filter(note => note.id !== id)
    notes = newNotes
    res.redirect('/notes')
})
app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log("Server running on 3000");
})