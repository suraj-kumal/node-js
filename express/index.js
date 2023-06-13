// const express = require('express')
// const app = express();

// app.get('',(req,res)=>{
//     console.log("data sent by browser:",req.query.name);
//     res.send("hello "+req.query.name);
    
// })
// app.get('/about',(req,res)=>{
//     res.send('hello this is about us page');
// })
// app.get('/contact',(req,res)=>{
//     res.send('hello this is contact page');
// })

// app.listen(2345);

const express = require('express')
const app = express();

app.get('',(req,res)=>{
    console.log("data sent by browser:",req.query.name);
    res.send(`<h1>hello ${req.query.name}</h1> 
    <a href="/about">Visit about page</a>
    `);
    
})
app.get('/about',(req,res)=>{
    res.send(`hello this is about us page<br>
    <form action="/contact">
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname"><br><br>
  <label for="lname">Last name:</label>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="submit" value="Submit">
</form>
<a href="/">goto home page</a>
    `);
})
app.get('/contact',(req,res)=>{
    res.send({
        name : "suraj",
        email : "suraj@Test.com",
      }
    );
})

app.listen(2345);

