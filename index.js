const express = require('express')
const app = express()
const dotenv = require('dotenv');
dotenv.config();


const mongoose = require('mongoose')


app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())



mongoose.connect("mongodb://localhost/" + process.env.DATABASE_URL).then(() => {
    console.log('Conectou ao banco!')
    app.listen(3000)
  })
  .catch((err) => console.log(err))