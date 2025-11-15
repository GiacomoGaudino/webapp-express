const Router = require('express').Router()
const filmsController = require('../controllers/filmsController.js')
const upload = require('../middleware/upload.js')

Router.get('/', filmsController.index)

Router.get('/:id', filmsController.show)

Router.post('/', upload.single('cover_image'), filmsController.store)

Router.post('/:id/reviews', upload.none(), filmsController.createReview)

Router.delete('/:id', filmsController.destroy)

module.exports = Router