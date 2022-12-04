/** @format */

//jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
    console.log("Server is running on port 3000.");
});

app.post("/", function(req, res){
    const query = req.body.cityName;
    const api_key= "d7efd29dddf7581ec4b228c2c874a14e";
    const units = "metric"
    
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + api_key + "&units=" + units + "&lang=es";
    
    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            var weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const imageURL = "http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"


            res.write("<p>El tiempo es " + weatherDescription + "</p>");
            res.write("<h1>La temperatura en " + query + " es " + temp + " grados Celsius.</h1>");
            res.write('<img src="' + imageURL + '">');
            res.send();
        });
    });
});