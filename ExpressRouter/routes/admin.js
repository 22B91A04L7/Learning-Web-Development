const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.query.isAdmin === "true") {
        return next();
    }
    res.send("Unauthorized!!! not an admin")
})

router.get("/secret", (req, res) => {
    res.send("ITS a secret!!")
})

router.get("/deleteAll", (req, res) => {
    res.send("OK delete Evereything!!")
})

router.get("/", (req, res) => {
    res.send("Admin PAge")
})


module.exports = router;