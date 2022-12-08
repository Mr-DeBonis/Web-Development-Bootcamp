//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items = [];

app.listen(3000, function () {
    console.log("Server started on port 3000.");
})

app.get("/", function (req, res) {
    var today = new Date();
    const options = {weekday : 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'};
    
    var day = today.toLocaleDateString('en-US', options)



    res.render('list', {kindOfDay : day, nextItems :items});
})

app.post("/",function (req,res) {
    items.push(req.body.nextItem);
    res.redirect("/");
})




