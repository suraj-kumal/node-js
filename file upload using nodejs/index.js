const express = require('express')
const multer = require('multer')
const app = express();
const uploadfile = multer({
    storage : multer.diskStorage({
        destination : (req,file,cb)=>{
            cb(null,'uploads')

        },
        filename : (req,file,cb)=>{
        cb(null,file.fieldname + "-"+Date.now()+".jpg")
        }
    })
}).single('user_file'); 
app.post("/upload",uploadfile,(req,res)=>{
    res.send('upload');
})

app.listen(5000,()=>{
    console.log("server is running at 5000");
});