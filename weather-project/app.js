const express = require("express")
const https = require('https')
const app = express()

app.get("/", function (req, res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Columbus&appid=6d5c1d3ffcfa23dfb17678688beef14a&units=imperial"
    https.get(url, function(response){
        console.log(response)
    })
    res.send('Sever is up and running.')
})

app.listen(3000, function(){
    console.log('Server running on port 3000')
})