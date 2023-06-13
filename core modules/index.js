console.log("zero cool !!!");
//core modules
//fs,HTTP,Buffer 


//global modules
// no need to be imported eg. console.log("x");
console.log("->",__dirname);
console.log("->",__filename);


//non global modules
// need to be imported
const fs = require('fs');
fs.writeFileSync("hello.txt","i am zero cool");
fs.writeFileSync("hello2.txt","po tangina mo");


//importing only one 
const files = require('fs').writeFileSync;

files("code.txt","node js")
files("code2.txt","node js and express")