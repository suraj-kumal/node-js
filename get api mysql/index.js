const express = require('express');
const connection = require('./config')
const app = express();

app.use(express.json());
app.get('/',(req,res)=>{
    connection.query("select * from department",(err,result)=>{
     res.send(result); 
    })
})

app.post("/",(req,resp)=>{
    const data=req.body;
    con.query("INSERT INTO users SET?",data,(error,results,fields)=>{
      if(error) throw error;
      resp.send(results)
    })
  });


app.listen(5000,()=>{
    console.log("server is running at 5000")
})