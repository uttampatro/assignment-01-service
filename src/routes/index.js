const express = require('express');
const {
    creatingMovie,
    getAllMovie,
    getMovie,
    generateSignedUrl,
} = require('../../src/controllers/movie');

const router = express.Router();

router.post('/createMovie', creatingMovie);
router.get('/getMovieList', getAllMovie);
router.get('/getMovie/:id', getMovie);
router.get('/sign-url', generateSignedUrl);

module.exports = router;
