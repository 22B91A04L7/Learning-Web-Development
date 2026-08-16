//db --> collections --> documents

const mongoose = require('mongoose');

const MONGO_URI = "mongodb://localhost:27017/Marvel"

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MONGO-DB");
    })
    .catch((err) => {
        console.log("OHH !!!! ERROr");
        console.log(err);

    })
// schema
const movieSchema = new mongoose.Schema({
    title: String,
    actor: String,
    year: Number,
    rating: Number
})
//making model
const Movie = mongoose.model('Movie', movieSchema)

// new document
const newMovie = new Movie({
    title: "Spider Man",
    actor: "Tom Holland",
    year: 2026,
    rating: 7.8
})

// Movie.updateMany({ rating: { $gt: 7 } }, { actor: "PSPK" })
//     .then((data) => {
//         console.log(data);
//     })