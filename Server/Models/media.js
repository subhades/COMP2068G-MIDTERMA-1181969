const mongoose = require('mongoose');

// define schema for Media object
let mediaSchema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    provider: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    username: {
        type: String,
        required: true
    }
});

let Media = mongoose.model('Media', mediaSchema);
console.log(Media);
module.exports = Media;