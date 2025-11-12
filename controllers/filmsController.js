const connection = require('../database/connection.js')

function index(req, res) {
    const sql = 'SELECT * FROM films'
    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: err.message })
        res.json(results)
    })
}

function show(req, res) {
    const sql = 'SELECT * FROM films WHERE id = ?'
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

module.exports = { index, show, createReview }