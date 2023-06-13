const express = require('express');
const mongoose = require('mongoose');
require('./config')
const product = require('./products')
const app = express();
app.use(express.json());
app.post("/create",async (req,res)=>{
    let data = new product(req.body)
    let save =await data.save();
    console.log(data);
})

app.get("/list",async(req,res)=>{
    let data = await product.find();
    res.send(data);
    console.log(data);

})
app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await product.deleteOne(req.params)
    resp.send(req.params)
})
app.put("/update/:_id",async(req,res)=>{
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
    {
        $set : req.body
    })
    res.send(req.params)
    
    

})
app.listen(5000);