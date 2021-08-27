const movieService = require("../services/movieService")

const createMovie =  async (req, res) => {
    try {
        const name = req.body.name
        const releaseDate = req.body.releaseDate
        const language = req.body.language
        const imageUrl = req.body.imageUrl
        const videoUrl = req.body.videoUrl
        const movie = await movieService({
            name: name,
            releaseDate: releaseDate,
            language: language,
            imageUrl:imageUrl ,
            videoUrl: videoUrl
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

module.exports = createMovie