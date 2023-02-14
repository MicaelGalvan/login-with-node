require('dotenv').config()
require('events').EventEmitter.prototype._maxListeners = 100;
const express = require('express');
const cors = require('cors');
const app = express()
const { dbConnect } = require('./config/mongo')


const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/api/user', require('./app/routes'))


dbConnect()
app.listen(PORT, () => {
    console.log("SERVER UP")
});