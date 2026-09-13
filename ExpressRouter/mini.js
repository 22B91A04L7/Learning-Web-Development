const express = require("express")
const app = express();
const userRoutes = require("./routes/user")
const cookiePraser = require("cookie-parser")

app.use(cookiePraser())
app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.send("home page !")
})
app.listen(5000, () => {
    console.log("Server running!!");
})