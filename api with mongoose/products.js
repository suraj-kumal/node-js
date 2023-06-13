const mongoose = require('mongoose');
const productSchema= mongoose.Schema({
    "name":String,
    "brand":String,
    "price":String,
    "category":String
});

module.exports= mongoose.model("products",productSchema);