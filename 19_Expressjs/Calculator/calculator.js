/** @format */

//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
    console.log("Starting server on port 3000");
});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", function (request, response) {
    num1 = Number(request.body.num1);
    num2 = Number(request.body.num2);

    var result = num1 + num2;

    response.send("Your result is " + result);
});

app.get("/bmicalculator", function (request, response) {
    response.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (request, response) {
    height = parseFloat(request.body.height);
    weight = parseFloat(request.body.weight);

    var bmi = weight / height ** 2;

    response.send("Your BMI is " + bmi);
});
