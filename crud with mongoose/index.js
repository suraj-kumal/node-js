const mongoose = require('mongoose')


const productschema = new mongoose.Schema({
    "name" :String,
    "brand" :String,
    "price" :String,
    "categories" :String
});
const productsMODEL = mongoose.model('products'/*collection*/,productschema);


let saveinDB = async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    let data = new productsMODEL(
        {
          "name":"ONE PLUS 8t",
           "brand" : "ONE PLUS",
           "price" : "NRP 30000",
           "categories" : "mobile phones"
        });
    let result =await data.save();
    console.log(result)

}

let updateinDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    let result = await productsMODEL.updateOne(
        {
           "name" : "M9"
        },{
            $set :{
                "brand" : "xiaomi",
                "price" : "NRP 30000",
                "categories" : "Mobile phones"
            }
        } )
        if(result.acknowledged){
            console.log("updated");
        }
              
}

let deleteinDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    let result = await productsMODEL.deleteOne({
        "name":"M80"
    })
    if(result.acknowledged){
        console.log("deleted");
    }

}
let findinDB = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    let result = await productsMODEL.find();
    console.log(result);

}
findinDB();