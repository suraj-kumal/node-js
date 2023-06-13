const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());

app.post("/",(req,res)=>{
    const data=req.body;
    con.query("INSERT INTO department SET?",data,(error,results,fields)=>{
      if(error) throw error;
      res.send(results)
    })
  });
  

app.listen("5000");