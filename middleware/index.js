const express = require('express');
const app = express();

const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("please provide age")
    }
    else if(!req.query.age<18){
        res.send("you cannot access this page")
    }
    else{
    next();
    }
}

app.use(reqFilter);
app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/user',(req,res)=>{
    res.send("user page")
})
app.listen(4000);