const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  stock_quantity: Number,
  items_sold: Number,
});

module.exports = mongoose.model("Product", productSchema);
