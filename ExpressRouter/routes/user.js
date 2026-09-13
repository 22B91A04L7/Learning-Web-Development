const express = require("express")
const router = express.Router();

router.get("/login", (req, res) => {
    res.send(`
        <h1>Login Page</h1>
        <a href="/user/set-preference">Set Preference</a>
    `)
})

router.get("/set-preference", (req, res) => {
    res.cookie('username', "venkat")
    res.redirect("/user/profile")
})

router.get("/profile", (req, res) => {
    const username = req.cookies.username;
    if (!username) {
        return res.send("Please set your preference first.")
    }
    res.send(`welcome, ${username}`)
})
module.exports = router;
