require('dotenv').config()
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const { dbConnect } = require('./config/mongo')


const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', require('./app/routes'))

dbConnect()
app.listen(PORT, () => {
    console.log("SERVER UP")
});