const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 255,
        min: 3,
      },
    releaseYear: {
        type: String,
        required: true,
        max: 255,
        min: 2,
    },
    language: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    imageUrl: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    videoUrl: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    }
})

module.exports = mongoose.model('movie',movieSchema)