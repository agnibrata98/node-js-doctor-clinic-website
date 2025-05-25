require('dotenv').config();

const express = require('express')

const app = express()
const ejs = require('ejs')

app.set('view engine', 'ejs')
app.set('views', './views')

const webroute = require('./app/routes/webRouter') // import webRouter
app.use(webroute) // use webRouter

app.use(express.static(__dirname + "/public"));



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})