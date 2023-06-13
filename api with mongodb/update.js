const dbconnect = require('./mongodbconnect')
let updatedata = async()=>{
    let data = await dbconnect();
    let result =await data.updateMany(
        {
            "name" : "Iphone 13 pro max"
        },
        {
            $set : {
                "price" : "NRP 100000"

            }
        }
    )
    if(result.acknowledged)
    {
        console.log("updated");
    }

}
updatedata();