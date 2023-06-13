const mongodbconnect = require("./mongodb")

const deletedata = async()=>{
    let db =await mongodbconnect();
    db = await db.deleteMany({
        "name" : "ONEPLUS 9RT"
    })
    console.log("deleted");
        
    
}
deletedata();