const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    // salva in static/images nella root del progetto
    destination: path.join(__dirname, '../static/images'),
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
    }
})

const upload = multer({ storage })

module.exports = upload
