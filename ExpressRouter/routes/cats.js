const express = require('express');
const router = express.Router()

router.get("/cats", (req, res) => {
    res.send("MEOW MEOW")
})

module.exports = router