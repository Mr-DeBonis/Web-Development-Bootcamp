//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", { useNewUrlParser: true });

// Create fruits schema
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// Create model (collection name is 'Fruit')
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as fruit."
});

//fruit.save();
//console.log("Fruit saved to DB");

////////////////////////////////////////////////////7
// Create person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Create model (collection name is 'Person')
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});
// person.save();
// console.log("Person saved to DB");

////////////////////////////////////////////////////7
// Insert several fruits at once

const kiwi = new Fruit({
    name: "Kiwi",
    score: 10,
    review: "The best fruit!"
});

const orange = new Fruit({
    name: "Orange",
    score: 4,
    review: "Too sour for me"
});

const banana = new Fruit({
    name: "Banana",
    score: 3,
    review: "Weird texture"
});
/* 
Fruit.insertMany([kiwi, orange, banana])
    .then(function () {
        console.log("Succesfully saved all the fruits to fruitsDB!");
    })
    .catch(function (err) {
        console.log(err);
    });
*/

// Log every fruit name from database
/*
Fruit.find()
.then(function (fruits) {
        // Close connection to DB
        mongoose.connection.close();
        
        fruits.forEach(function (fruit) {
            console.log(fruit.name);
        });
    })
    .catch(function (err) {
        console.log(err)
    })
*/

async function run(){
    const fruitsFound = await Fruit.find({}).exec();

    mongoose.connection.close();
    
    fruitsFound.forEach(fruit =>{
        console.log(fruit.name);
    })
}

run();