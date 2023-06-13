const mongoose = require("mongoose")
const productschema = mongoose.Schema({
    "name" : String,
    "brand" : String,
    "price" : String,
    "category" : String,
})
module.exports= mongoose.model("products",productschema);