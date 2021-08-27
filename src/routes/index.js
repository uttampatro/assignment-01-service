const express = require("express");
const createMovie = require('../controllers/movie')

const router = express.Router();

router.get('/', (req, res) => {
    res.send('server up and running');
});

router.post('/createMovie', createMovie)

module.exports = router