const express = require('express')
const filmRouter = require('./routes/films.js')
const notFound = require('./middleware/notFound.js')
const serverError = require('./middleware/serverError.js')
const cors = require("cors")
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3000

app.use('/images', express.static(path.join(__dirname, 'static/images')))
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json('Welcome to the films Webapp Backend')
})

app.use('/api/films', filmRouter)

app.use(notFound)

app.use(serverError)

app.listen(PORT, () => {
    console.log(`server is running on port http://localhost:${PORT}`);
})

