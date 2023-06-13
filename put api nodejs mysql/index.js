const express = require('express')
const mysql = require('./config')
const app = express();


app.use(express.json());
app.put("/updatedb",(req,res)=>{
    const data = [req.body.dept_name,req.body.building,req.body.budget,req.body.dept_name];
    mysql.query("update department set dept_name = ?,building = ?,budget= ? where dept_name = ?",data,(err,result,fields)=>{
          res.send(result);
    })
})

app.listen(5000,()=>{
    console.log("server is running at 5000")
})