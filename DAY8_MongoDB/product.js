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
        required: true,
    },
    price: {
        type: Number,
        max: [10, "Size is large"]
    },
    onSale: {
        type: Boolean,
        default: true
    },
    categories: {
        type: [String],
        default: "Cycling"
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

const Product = new mongoose.model('Product', productSchema);
const bike = new Product({
    name: "Lorry", price: 5.65, onSale: false, size: 'L'
})
bike.save()
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log(err);

    })