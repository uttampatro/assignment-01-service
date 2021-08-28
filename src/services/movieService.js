const Movie = require('../../src/entity/Movie')

const createMovie = async ({name, releaseYear, language, imageUrl, videoUrl}) => {
    const movie = new Movie({
        name, releaseYear, language, imageUrl, videoUrl
    })
    await movie.save()
    return movie
}
const fetchAllMovie = async () => {
    const movieList = await Movie.find()
    return movieList
}
const fetchMovie = async (id) => {
    const movie = await Movie.findOne({_id:id})
    return movie
}

module.exports = {createMovie, fetchAllMovie, fetchMovie}

