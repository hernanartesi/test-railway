


const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const { dbConnection } = require("./config/db")

app.use(cors())


app.use(express.json())

app.use('/note', require('./routes/noteRoute'))

app.listen(process.env.PORT, () => {
    console.log('Server is running')
})
