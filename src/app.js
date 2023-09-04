const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('./utils/Forecast.js')

const staticFile = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

const app = express()

app.set("view engine", 'hbs')
app.set("views", viewsPath)
hbs.registerPartials(partialPath)

app.use(express.static(staticFile))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/help', (req, res) => {
    res.render('help')
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Add Address For Weather Forecast"
        })
    }
    forecast(req.query.address, (error, data) => {
        if (error) {
            return res.send({ error: error })
        }
        else {
            res.send({
                data: data,
                address: req.query.address
            })
        }
    })
})

app.listen(3000, () => {
    console.log("Server Working on Port 3000 ")
})