const Router = require('express').Router()
const multer = require('multer')
const filmsController = require('../controllers/filmsController.js')
const upload = multer();


Router.get('/', filmsController.index)

Router.get('/:id', filmsController.show)

Router.post('/', upload.single('cover_image'), filmsController.store)

Router.post('/:id/reviews', upload.none(), filmsController.createReview)

module.exports = Router