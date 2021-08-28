const express = require("express");
const { creatingMovie, getAllMovie, getMovie } = require("../../src/controllers/movie");

const router = express.Router();



router.post('/createMovie', creatingMovie)
router.get('/getMovieList', getAllMovie)
router.get('/getMovie/:id', getMovie)

module.exports = router