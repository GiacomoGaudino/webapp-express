const Router = require('express').Router()
const filmsController = require('../controllers/filmsController.js')


Router.get('/', filmsController.index)

Router.get('/:id', filmsController.show)

module.exports = Router