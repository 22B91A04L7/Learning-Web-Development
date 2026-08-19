const express = require("express")
const app = express();
const path = require("path")
const mongoose = require("mongoose")
const Product = require("./models/product")
const methodOverride = require("method-override")


const MONGO_URI = "mongodb://localhost:27017/Demo"
const categories = ['fruit', 'vegetable', 'dairy']

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
app.use(methodOverride('_method'))

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id)
    res.redirect("/products")
})

//form to edit individual product
app.get("/products/:id/edit", async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render("products/edit", { product, categories })
})

//post the edit in server
app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const product = req.body
    await Product.findByIdAndUpdate(id, product, { runValidators: true })
    res.redirect(`/products/${id}`)
})

//form to add product
app.get("/products/new", (req, res) => {
    res.render("products/new", { categories })
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