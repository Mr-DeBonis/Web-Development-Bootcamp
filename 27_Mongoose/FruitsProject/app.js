//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", { useNewUrlParser: true });

// Create fruits schema
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});

// Create model (collection name is 'Fruit')
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as fruit."
});

////////////////////////////////////////////////////7
// Create person schema
const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

// Create model (collection name is 'Person')
const Person = mongoose.model("Person", personSchema);

const person = new Person({
    name: "John",
    age: 37
});
// person.save();
// console.log("Person saved to DB");

/////////////////////////////////////////////////////
// Relationships
const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit."
});

const amy = new Person({
    name: "Amy",
    age: 9,
    favouriteFruit: pineapple
})

const mango = new Fruit({
    name: "Mango",
    score: 8,
    review: "Super juicy!"
});

/////////////////////////////////////////////////////
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

async function run() {
    // Save singular entry
    // await fruit.save();
    // await person.save();
    // await pineapple.save();
    // await amy.save();
    // await mango.save();
    
    //Insert many
    //await Fruit.insertMany([kiwi, orange, banana]);
    
    //Update an entry 
    await Fruit.updateOne({ _id: "64245dc1632c362a7f74ad85" }, {
        name: "Peach",
        score: 10,
        review: "It's really juicy and sweet!"
    });

    await Person.updateOne({name: "John"}, {favouriteFruit:mango});

    //Delete an entry
    // await Fruit.deleteOne({_id: "64245c19ca3f0854e8bff05d"});

    // Delete a collection
    // await Person.deleteMany({ name: "John" });

    // Log every fruit name from database
    const fruitsFound = await Fruit.find({});

    // Close connection
    mongoose.connection.close();

    fruitsFound.forEach(fruit => {
        console.log(fruit.name);
    })
}

run();