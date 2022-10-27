const { response } = require('express')
const express = require('express')
const app = express()

app.get('/', function (req, res){
    res.send('<h1>Hello</h1>')
})

app.get('/contact', function(req, res){
    res.send("Contact me at: brennan@gmail.com")
})

app.get('/about', function(req, res){
    res.send("Hi, it's me. I own this website.")
})

app.get('/hobbies', function(req, res){
    res.send('<ul><li>Coffee</li><li>Bike</li><li>Beer</li></ul>')
})

app.listen(3000, function(){
    console.log('Server started on port 3000')
})


