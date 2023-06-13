const express = require('express');
const EventEmitter = require('events');

const app = express();

const events = new EventEmitter();

let count = 0
events.on("count api",()=>{
    count ++;
    console.log("event called:",count);
})
app.get("/",(req,res)=>{
    res.send("api called");
    events.emit("count api");
})
app.get("/search",(req,res)=>{
    res.send("search api called");
})
app.get("/update",(req,res)=>{
    res.send("update api called");
})


app.listen(5000);