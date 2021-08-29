const Movie = require('../../src/entity/Movie')

const createMovie = async ({name, releaseYear, language, imageUrl, videoUrl}) => {
    const movie = new Movie({
        name, releaseYear, language, imageUrl, videoUrl
    })
    await movie.save()
    return movie
}
const fetchAllMovie = async ({limit, page}) => {
    const movieList = await Movie.find().skip(page > 0 ? ( ( page - 1 ) * limit ) : 0).limit(limit).exec() 
    const totalMovieCount = await Movie.countDocuments()
    return { movieList: movieList, pagination:{ limit, page, count: totalMovieCount }}
}
const fetchMovie = async (id) => {
    const movie = await Movie.findOne({_id:id})
    return movie
}

const generateRandomFilename = (filePath) => {
    return Date.now() + '_' + (Math.random() * 1000000).toFixed() + '_' + filePath;
}

module.exports = {createMovie, fetchAllMovie, fetchMovie, generateRandomFilename}

