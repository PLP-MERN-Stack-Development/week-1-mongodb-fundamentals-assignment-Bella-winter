// queries.js

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017"; 
const client = new MongoClient(uri);


async function run() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db("plp_bookstore");
    const books = db.collection("books");

    // Task 2: Basic Queries
    const genreBooks = await books.find({ genre: "Gothic Fiction" }).toArray();
    console.log("Gothic Fiction books:", genreBooks);

    const recentBooks = await books.find({ published_year: { $gt: 1955 } }).toArray();
    console.log("Books published after 1955:", recentBooks);

    const orwellBooks = await books.find({ author: "J.R.R. Tolkien" }).toArray();
    console.log("Books by J.R.R. Tolkien:", TolkienBooks);

    await books.updateOne({ title: "The Alchemist" }, { $set: { price: 15.99 } });
    await books.deleteOne({ title: "Moby Dick" });

    // Task 3: Advanced Queries
    const advancedQuery = await books.find({ in_stock: true, published_year: { $gt: 2010 } }).toArray();
    console.log("In-stock books after 2010:", advancedQuery);

    const projectionQuery = await books.find({}, {
      projection: { title: 1, author: 1, price: 1, _id: 0 }
    }).toArray();
    console.log("Projection query:", projectionQuery);

    const sortedAsc = await books.find().sort({ price: 1 }).toArray();
    const sortedDesc = await books.find().sort({ price: -1 }).toArray();
    console.log("Sorted by price ascending:", sortedAsc);
    console.log("Sorted by price descending:", sortedDesc);

    const pageTwo = await books.find().skip(5).limit(5).toArray();
    console.log("Page 2 results (5 books per page):", pageTwo);

    // Task 4: Aggregation
    const avgPriceByGenre = await books.aggregate([
      { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
    ]).toArray();

    const topAuthor = await books.aggregate([
      { $group: { _id: "$author", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 }
    ]).toArray();

    const booksByDecade = await books.aggregate([
      {
        $project: {
          decade: { $concat: [{ $substr: ["$published_year", 0, 3] }, "0s"] }
        }
      },
      {
        $group: {
          _id: "$decade",
          count: { $sum: 1 }
        }
      }
    ]).toArray();

    console.log("Average price by genre:", avgPriceByGenre);
    console.log("Top author:", topAuthor);
    console.log("Books by decade:", booksByDecade);

    // Task 5: Indexing
    await books.createIndex({ title: 1 });
    await books.createIndex({ author: 1, published_year: 1 });

    const explainQuery = await books.find({ title: "1984" }).explain("executionStats");
    console.log("Explain performance:", JSON.stringify(explainQuery, null, 2));

  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
    console.log("Connection closed");
  }
}

run();
 
module.exports = { run };
