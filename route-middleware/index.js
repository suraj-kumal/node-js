const express = require('express');
const app = express();
const reqFilter = require('./middle')
const route = express.Router();

// app.use(reqFilter);
route.use(reqFilter)
app.get('/',(req,res)=>{
    res.send("home page")
})
app.get('/user',reqFilter,(req,res)=>{
    res.send("user page")
})
route.get('/about',reqFilter,(req,res)=>{
    res.send("about page");
})
route.get('/contact',(req,res)=>{
    res.send("contact page");
})

app.use('/',route)
app.listen(4000);