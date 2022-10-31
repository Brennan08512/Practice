const express = require("express")
const https = require('https')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function (req, res){
    res.sendFile(__dirname + '/index.html')
})

app.post('/', function(req, res){
    console.log('post recieved')
   
    const query = req.body.cityName
    const apiKey = '6d5c1d3ffcfa23dfb17678688beef14a&'
    const unit = 'imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}units=${unit}`

    https.get(url, function(response){
        console.log(response.statusCode)

        response.on('data', function(data){
            const weatherData = JSON.parse(data) //turning the data into a JS object
            const temp = weatherData.main.temp
            const weatherDescription = weatherData.weather[0].description
            const icon = weatherData.weather[0].icon
            const imageUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            res.write(`<h1>The temperature in ${query} is ${temp} degrees F.</h1>`)
            res.write(`<p>The weather is currently ${weatherDescription}`)
            res.write(`<img src=${imageUrl}>`)
            res.send()
            console.log(temp)
            console.log(weatherDescription)
            // const object = {
            //     name: 'Brennan',
            //     favFood:'Ramen'
            // }
            // console.log(JSON.stringify(object)) //turn object into a string
        })
    })
})




app.listen(3000, function(){
    console.log('Server running on port 3000')
})