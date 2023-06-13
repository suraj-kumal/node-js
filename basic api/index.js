const http = require('http'); //importing core module 'http'
//http handles request and response inside server

const server =http.createServer((req,res)=>{
    res.write("<h1>i am zerocool</h1>")
     //html can also be send as response
    res.end();   //response needed to end

})
server.listen(7000)
//understanding function as parameter
// function DATACONTROL(req,res){
//    res.write("<h1>I AM ZEROCOOL</h1>");
//    res.end();
// }

//arrow function
const DATACONTROL = (req,res)=>{
    res.write("<h1>I AM ZEROCOOL</h1>");
    res.end();

}
const secondserver = http.createServer(DATACONTROL);
secondserver.listen(8000);


//testing packages
const colors = require("colors");
console.log("colorful console".green);
console.log("hello world".red);