const express = require('express')
const multer = require('multer')
const filmRouter = require('./routes/films.js')
const notFound = require('./middleware/notFound.js')
const serverError = require('./middleware/serverError.js')
const cors = require("cors")
const app = express()
const upload = multer();
const PORT = process.env.PORT || 3000

app.use(express.static('static'))
app.use(express.json())
app.use(cors())
app.use(upload.none());

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.json('Welcome to the films Webapp Backend')
})

app.use('/api/films', filmRouter)

app.use(serverError)

app.use(notFound)

