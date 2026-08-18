const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const Product = require("./models/product")


const MONGO_URI = "mongodb://localhost:27017/Demo"

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MONGO CONNECTION OPEN");
    })
    .catch((err) => {
        console.log("MONGO DB CONNECTION ERROR");

    })

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//form to add product
app.get("/products/new", (req, res) => {
    res.render("products/new")
})

// adding product
app.post("/products", async (req, res) => {
    const newProduct = new Product(req.body)
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

//show product individually
app.get("/products/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/show", { product })

})

// showing products
app.get("/products", async (req, res) => {
    const products = await Product.find({})
    res.render("products/index", { products })
})

app.get('/', (req, res) => {
    res.send("HOME PAGE")
})

app.listen(3000, () => {
    console.log("Listening on PORT 3000");
})