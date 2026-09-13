const express = require('express');
const app = express();
const dogRoutes = require('./routes/dogs')
const catRoutes = require('./routes/cats')
const adminRoutes = require("./routes/admin")


app.use("/admin", adminRoutes)
app.use("/", dogRoutes)
app.use("/", catRoutes)

app.listen(5000, () => {
    console.log("Server running on 5000");
})