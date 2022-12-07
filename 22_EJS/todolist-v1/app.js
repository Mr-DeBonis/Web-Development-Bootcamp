//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    var today = new Date();
    var day = days[today.getDay()];

    res.render('list', {kindOfDay : day});
})

app.listen(3000, function () {
    console.log("Server started on port 3000.");
})