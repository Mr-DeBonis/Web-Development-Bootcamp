//jshint esversion:6

const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB", {useNewUrlParser: true});

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
console.log("Hola");
fruit.save();
console.log("Hola");

/* 
// Replace the placeholder with your Atlas connection string
const uri = "mongodb://0.0.0.0:27017/";

//Database Name
const dbName = "fruitsDB";

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db(dbName).command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    // Insert documents to collection
    const collectionName = "fruits";

    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    try {
      const docs = [
        {
          name: "Apple",
          score: 8,
          review: "Great fruit"
        },
        {
          name: "Orange",
          score: 6,
          review: "Kinda sour"
        },
        {
          name: "Banana",
          score: 9,
          review: "Great stuff!"
        }
      ];

      const insertManyresult = await collection.insertMany(docs);
      let ids = insertManyresult.insertedIds;
      console.log(`${insertManyresult.insertedCount} documents were inserted.`);
      for (let id of Object.values(ids)) {
        console.log(`Inserted a document with id ${id}`);
      }

    } catch (e) {
      console.log(`A MongoBulkWriteException occurred, but there are successfully processed documents.`);
      let ids = e.result.result.insertedIds;
      for (let id of Object.values(ids)) {
        console.log(`Processed a document with id ${id._id}`);
      }
      console.log(`Number of documents inserted: ${e.result.result.nInserted}`);
    }

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir); 

*/