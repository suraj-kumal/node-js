
const express = require('express');
const dbconnect = require('./mongodbconnect');
const app = express();
const mongodb = require('mongodb');


app.use(express.json())
app.get('/',async(req,res)=>{
        let data = await dbconnect();
        data = await data.find().toArray();
        res.send(data);
})

app.post('/',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.insertOne(req.body)
    if(result.acknowledged)
    {
        console.log("data inserted");
    }
    res.send(result);
    
})
app.put('/:name',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.updateOne(
        {
            "name" : req.params.name
        },{
            $set : req.body

        }
        )
        if(result.acknowledged){
            console.log("updated");
        }
        
    res.send(req.body);
})
app.delete('/:id',async(req,res)=>{
    let data = await dbconnect();
    let result =await  data.deleteOne({
        _id : new mongodb.ObjectId(req.params.id)

    })
     console.log(req.params.id);
     res.send(req.params.id);
})
app.listen(4500,()=>{
    console.log("server is running at 4500")
});