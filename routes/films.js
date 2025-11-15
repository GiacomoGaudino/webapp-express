const Router = require('express').Router()
const multer = require('multer')
const path = require('path')
const filmsController = require('../controllers/filmsController.js')
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../static/images'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})
const upload = multer({ storage })


Router.get('/', filmsController.index)

Router.get('/:id', filmsController.show)

Router.post('/', upload.single('cover_image'), filmsController.store)

Router.post('/:id/reviews', upload.none(), filmsController.createReview)

module.exports = Router