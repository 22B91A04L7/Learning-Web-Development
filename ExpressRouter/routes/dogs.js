const express = require('express');
const router = express.Router()

router.get('/dogs', (req, res) => {
    res.send("BOW BOW")
})

router.get("/dogs/:id", (req, res) => {
    const { id } = req.params
    res.send(`viewing dog with id : ${id}`)
})

module.exports = router