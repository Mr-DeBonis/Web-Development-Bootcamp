//jshint esversion:6

const express = require("express");
const app = express();

app.listen(3000, function () {
    console.log("Starting server on port 3000");
    
});

app.get("/", function(request, response){
    console.log(request);
    response.send("<hi>Hello world!</hi>");
});

app.get("/contact", function(request, response){
    response.send("Contact me at ignacio.debonis@gmail.com")
});

app.get("/about", function(request, response){
    response.send("Hello! My name is Ignacio De Bonis, Electronics engineer, Software Developer")
});

app.get("/hobbies", function(request, response){
    response.send("<h1>Hobbies</h1><ul><li>Coffee</li><li>Videogames</li><li>Cycling</li></ul>")
});