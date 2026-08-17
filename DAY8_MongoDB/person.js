const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/usersApp"
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MONGO DB");

    })
    .catch((err) => {
        console.log("ERROR !!!");
        console.log(err);

    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual("fullName")
    .get(function () {  //getter
        return `${this.first} ${this.last}`
    })
    .set(function (updated) {   //setter
        this.first = updated.substr(0, updated.indexOf(' '))
        this.last = updated.substr(updated.indexOf(' ') + 1)
    })


const Person = new mongoose.model("Person", personSchema);

// const hero = Person.create({ first: "Pawan Kalyan", last: "Konidala" })