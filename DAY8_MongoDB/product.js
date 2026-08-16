const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/shopApp"
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MONGO DB");

    })
    .catch((err) => {
        console.log("ERROR !!!");
        console.log(err);

    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number
    }
})

const Product = new mongoose.model('Product', productSchema);
const bike = new Product({
    name: "Splendor",
})
bike.save()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);

    })