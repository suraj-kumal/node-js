const express = require('express');
const app = express();
require('./config');
const products = require('./products')
app.use(express.json());


app.get("/search/:key",async(req,res)=>{
    console.log(req.params.key);
    let data =await products.find({
        "$or" : [
            {
                "brand":{$regex:req.params.key}
            }
        ]
    });

    res.send(data);
})
app.listen(5000,()=>{
    console.log("server is running is 5000")
})