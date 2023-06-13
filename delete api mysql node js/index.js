const express = require("express");
const con = require("./config");
const app = express();
app.use(express.json());

app.delete("/delete",(req,res)=>{
    let data = req.body.dept_name;
    con.query("DELETE FROM department WHERE dept_name = ?",data,(err,result,fields)=>{
        res.send(result);
    })
})
  

app.listen("5000",()=>{
    console.log("server is running at 5000");
});