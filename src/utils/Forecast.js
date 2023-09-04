const request = require('request')

const foreCast = (city, callback) => {
        const url = `http://api.weatherstack.com/current?access_key=2e4112463577895751b6aa8c6bbcb7ae&query=${city}`
        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback("Unable To Fetch.", undefined)
            }
            else if (response.body.error) {
                callback("Unable to Find Location.", undefined)
            }
            else {
                let date = new Date()
                let myDate = date.toDateString()
                callback(undefined, "Current Temperature: " + response.body.current.temperature + "°C \n" + "Date: " + myDate + "\nLocation: " + response.body.request.query)
            }
        })
}

module.exports = foreCast