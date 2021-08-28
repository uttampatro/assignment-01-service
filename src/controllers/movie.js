const { createMovie, fetchAllMovie, fetchMovie } = require("../../src/services/movieService")

const creatingMovie =  async (req, res) => {
    try {
        const name = req.body.name
        const releaseYear = req.body.releaseYear
        const language = req.body.language
        const imageUrl = req.body.imageUrl
        const videoUrl = req.body.videoUrl
        const movie = await createMovie({
            name: name,
            releaseYear: releaseYear,
            language: language,
            imageUrl:imageUrl ,
            videoUrl: videoUrl
        })
        return res.json(movie)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const getAllMovie = async (req, res) => {
    try {
        const movieList = await fetchAllMovie()
        return res.json(movieList)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const getMovie = async (req, res) => {
    try {
        const id = req.params.id
        const movie =  await fetchMovie({
            _id: id
        })
        return res.json(movie)
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

module.exports = {creatingMovie, getAllMovie, getMovie}
