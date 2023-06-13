const express = require('express');
const path = require('path');
const app = express();
const publicpath = path.join(__dirname,'public')




app.set('view engine','ejs');
app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})
app.get('/profile',(req,res)=>{
    const user =
        {
        name : "zerocool",
        email : "zerocool@test.com",
        phone : "123456789",
        skills : ["PHP","JS","C++","Java","Nodejs"]
        }
    res.render('profile',{user});
})
app.get('/login',(req,res)=>{

    res.render('login');
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

