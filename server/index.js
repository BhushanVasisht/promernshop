const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const getH = require('./routes/getH')
const postH = require('./routes/postH')
const putH = require('./routes/putH')
const deleteH = require('./routes/deleteH')

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(r => console.log('Connected to MongoDB'))

mongoose.connection.on('error', e => console.log(e))

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())


app.get('/api/products', (req, res) => {
    getH.getAllProducts(req, res)
})

app.get('/api/products/:id', (req, res) => {
    getH.getProductById(req, res)
})

app.post('/api/products', (req, res) => {
    postH.addEntry(req, res)
})

app.put('/api/products/:id', (req, res) => {

})

app.delete('/api/products/:id', (req, res) => {

})

app.listen(process.env.PORT, () => console.log('Listening on Port: ' + process.env.PORT))
