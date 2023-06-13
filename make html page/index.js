const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'public')

app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicpath}/about.html`)
})
app.get('/abc',(req,res)=>{
    res.sendFile(`${publicpath}/help.html`)
})
app.get('*',(req,res)=>{
    res.sendFile(`${publicpath}/pagenotfound.html`)
})
// app.use(express.static(publicpath))
app.listen(4500);

