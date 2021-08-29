const { createMovie, fetchAllMovie, fetchMovie,generateRandomFilename } = require("../../src/services/movieService")
var aws = require('aws-sdk')

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
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

const getAllMovie = async (req, res) => {
    try {
        const page = req.query.page ? parseInt(req.query.page): 1;
        const limit = req.query.limit ? parseInt(req.query.limit) : 10;
        const movieList = await fetchAllMovie({page, limit})
        return res.json(movieList)
    } catch (error) {
        console.log(error)
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

const generateSignedUrl = (req, res) => {
    try {
        var s3 = new aws.S3({ 
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        })
        const fileName = req.query['filename'];
        const destinationKey = generateRandomFilename(fileName)

        const s3Params = {
          Bucket: process.env.S3_BUCKET,
          Key: destinationKey,
          Expires: 60,
          ACL: 'public-read'
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if(err){
              console.log(err);
              return res.end();
            }
            const returnData = {
              signedRequest: data,
              url: `https://${process.env.S3_BUCKET}.s3.amazonaws.com/${destinationKey}`
            };
            res.write(JSON.stringify(returnData));
            res.end();
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

module.exports = {creatingMovie, getAllMovie, getMovie,generateSignedUrl}
