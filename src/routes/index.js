const express = require("express");
const { creatingMovie, getAllMovie, getMovie } = require("../controllers/Movie");

const router = express.Router();

router.get('/', (req, res) => {
    res.send('server up and running');
});

router.post('/createMovie', creatingMovie)
router.get('/getMovieList', getAllMovie)
router.get('/getMovie/:id', getMovie)

module.exports = router