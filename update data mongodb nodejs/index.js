const dbconnection = require('./mongodb')

const update = async()=>{
    let data = dbconnection();
    data = (await data).updateOne(
        {
            "name" : "M70"
        },
        {
           $set : {
              "name" : "M80"
           }
        }
    )
         console.log("updated")

    
}
update();