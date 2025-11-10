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

module.exports = { index, show }