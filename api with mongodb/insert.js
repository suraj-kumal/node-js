const dbconnect = require('./mongodbconnect')
let insertdata = async()=>{
    let data = await dbconnect();
    let datatobeInserted = await data.insertOne({
        "name" : "Iphone 14 PRO MAX",
        "brand" : "apple",
        "price" : "150000",
        "categories" : "mobile phones"

    })
    if(datatobeInserted.acknowledged)
    {
        console.log("data inserted");
    }

}
insertdata();