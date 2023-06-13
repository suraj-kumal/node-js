const dbConnect = require('./mongodb');

const insertData=async ()=>{
   let data = await dbConnect();
  //insertOne for one data
  let result = await data.insertMany([
    {
        "name":"ONEPLUS 10",
        "brand" : "ONE PLUS",
        "price" : "NRP 100000",
        "category" : "mobile phones"
    },
    {
        "name":"ONEPLUS 9RT",
        "brand" : "ONE PLUS",
        "price" : "NRP 88000",
        "category" : "mobile phones"
    }
]
  )
  if(result.acknowledged)
  {
      console.warn("data is inserted")
  }
}

insertData();
