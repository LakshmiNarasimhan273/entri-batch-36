# 🧩 MongoDB Aggregation & Indexing Examples

```js
// Group by Category and Count the total products
db.products.aggregate([
  { $group: { _id: "$category", count: { $sum: 1 } } }
]);

// Search product by title
db.products.aggregate([
  { $match: { title: "USB-C Hub Adapter" } }
]);

// Group by category and find the average price, rating & sum the total amount
db.products.aggregate([
  {
    $group: {
      _id: "$category",
      count: { $sum: 1 },
      avgPrice: { $avg: "$price" },
      avgRating: { $avg: "$rating" },
      totalsumValue: { $sum: "$price" }
    }
  }
]);

// Sort by price (Higher to lower)
db.products.aggregate([
  { $match: { category: "Electronics" } },
  { $sort: { price: -1 } }
]);

// Sort by price (Lower to higher)
db.products.aggregate([
  { $match: { category: "Electronics" } },
  { $sort: { price: 1 } }
]);

// Create Indexing to products title and set the priority as 1
db.products.createIndex({ title: 1, priority: 1 });

// Check the optimization is applied or not by finding random product data
db.products.find({ title: ObjectId("68e90ad85165b8a5688b3d09") }).explain("executionStats");
