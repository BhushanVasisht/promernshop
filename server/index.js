const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

dotenv.config()

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    console.log("Hello");
})

app.listen(process.env.PORT, () => console.log('Listening on Port ${process.env.PORT}'))
