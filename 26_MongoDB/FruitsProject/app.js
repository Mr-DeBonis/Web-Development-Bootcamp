//jshint esversion:6

const { MongoClient, ServerApiVersion } = require("mongodb");

// Replace the placeholder with your Atlas connection string
const uri = "mongodb://0.0.0.0:27017/";

//Database Name
const dbName = "fruitsDB";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
}
);

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