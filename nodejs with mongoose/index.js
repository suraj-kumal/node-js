const mongoose = require('mongoose')
let main = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    const productschema = new mongoose.Schema({
        "name" :String,
        "brand" :String,
        "price" :String,
        "categories" :String
    });
    const productsMODEL = mongoose.model
    ('products',productschema);
    let data = new productsMODEL({"name":"M9"});
    let result =await data.save();
    console.log(result)

}
main();