const dbconnection = require('./mongodb')
// dbconnection().then((res,rej)=>{
//     res.find({}).toArray().then((data)=>{
//         console.log(data);
//     });
    

// })

const main=async()=>{
    let data = await dbconnection();
    data = await data.find().toArray();
    console.log(data); 
}
main();