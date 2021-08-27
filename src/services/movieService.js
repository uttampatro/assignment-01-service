const Movie = require('../entity/Movie')

const MovieService = async () => {
    const movie = new Movie()
    await movie.save()
    return movie
}

module.exports = MovieService

