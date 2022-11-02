const express = require("express")
const bodyParser = require("body-parser")


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

let items = []

app.get("/", function(req, res){

    let options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
     };
    let today  = new Date();
    let day = today.toLocaleString("en-US", options)

    res.render('list', {kindOfDay: day, newListItems: items})

})

app.post('/', function(req, res){
    let item = req.body.newItem
    items.push(item)
    res.redirect('/')
})









app.listen(process.env.PORT || 3000, function(){
    console.log("server started on port 3000")
})