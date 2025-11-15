const connection = require('../database/connection.js')
const multer = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images'),
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
const upload = multer({ storage })


function index(req, res) {
    const sql = 'SELECT films.*, AVG(reviews.average_rating) AS avg FROM films LEFT JOIN reviews ON reviews.film_id = films.id GROUP BY films.id'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(results)
    })
}

function show(req, res) {
    const sql = 'SELECT films.*, AVG(reviews.average_rating) AS avg FROM films LEFT JOIN reviews ON reviews.film_id = films.id WHERE films.id = ? GROUP BY films.id '
    const reviewSql = 'SELECT * FROM reviews WHERE film_id = ?'
    const id = Number(req.params.id)
    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        if (results.length === 0) return res.status(404).json({ error: 'film not found' })

        connection.query(reviewSql, [id], (reviewsErr, reviewsResults) => {
            if (reviewsErr) return res.status(500).json({ error: err.message })
            const thisFilm = { ...results[0], review: reviewsResults }
            res.json(thisFilm)
        })
    })
}

function store(req, res) {
    console.log(req.body);
    const cover_image = `${process.env.server_address}:${process.env.port}/static/images/` + req.file.originalname
    const { name, director, synopsis, release_date, duration, language } = req.body
    console.log(name);

    const sql = 'INSERT INTO films (name, director, cover_image, synopsis, release_date, duration, language) VALUES (?, ?, ?, ?, ?, ?, ?);'
    connection.query(sql, [name, director, cover_image, synopsis, release_date, duration, language], (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: err.message });
        }

        res.status(201).json({
            message: "Film creato con successo!",
            id: results.insertId
        });
    })
}

function createReview(req, res) {
    const film_id = Number(req.params.id)
    const { username, review, average_rating } = req.body;
    const sql = `INSERT INTO reviews (username, review, average_rating, film_id) VALUES (?, ?, ?, ?)`
    connection.query(sql, [username, review, average_rating, film_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.status(201).json({
            message: "Recensione creata con successo!",
            reviewId: results.insertId,
        });
    })
}

module.exports = { index, show, store, createReview }