const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({

    title: {
        type: String,
       // required: true
    },
    year: {
        type: Number,
        //required: true
    },
    director: {
        type: String,
        //required: true
    },
    duration: {
        type: String,
        //required: true
    },
    genre: {
        type: String,
        //required: true  
    },
    rate: {
        type: Number,
        //required: true
    },
    poster: {
        type: String,
        //required: true
    }   
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies