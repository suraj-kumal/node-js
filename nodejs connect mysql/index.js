const mysql = require('mysql');
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "csit77_suraj"
})
// connection.connect((err)=>{
//     if(err){
//         console.log("error");
//     }
//     else{
//         console.log("connected");
//     }
// })

connection.query("select * from department",(err,res)=>{
    console.log(res);
})