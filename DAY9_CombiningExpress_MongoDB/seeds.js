const mongoose = require("mongoose")
const Product = require("./models/product")

const MONGO_URI = "mongodb://localhost:27017/Demo"
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MONGO DB");

    })
    .catch((err) => {
        console.log("DB Connection Failed !!");
    })

const seedProducts = [
    { name: "Gala Apple", price: 1.99, category: "fruit" },
    { name: "Organic Banana", price: 0.89, category: "fruit" },
    { name: "Strawberries 1lb", price: 3.49, category: "fruit" },
    { name: "Avocado", price: 1.25, category: "fruit" },
    { name: "Broccoli Crown", price: 2.19, category: "vegetable" },
    { name: "Carrots 1lb Bag", price: 1.49, category: "vegetable" },
    { name: "English Cucumber", price: 1.79, category: "vegetable" },
    { name: "Baby Spinach", price: 2.99, category: "vegetable" },
    { name: "Whole Milk 1Gal", price: 3.99, category: "dairy" },
    { name: "Greek Yogurt Plain", price: 4.49, category: "dairy" },
    { name: "Cheddar Cheese Block", price: 3.79, category: "dairy" },
    { name: "Unsalted Butter", price: 2.99, category: "dairy" }
];

async function seedDB() {
    try {
        await Product.deleteMany({});

        await Product.insertMany(seedProducts)
            .then((res) => {
                console.log(res);
                console.log("Data Added successfully to DB")

            })
            .catch((err) => {
                console.log(err);

            })


    }
    catch (err) {
        console.log("ERROR !! DATA NOT ADDED TO DB");

    }
}

async function clearDB() {
    await Product.deleteMany({})
    console.log("DB CLEARED !!!");

}

seedDB();
// clearDB();