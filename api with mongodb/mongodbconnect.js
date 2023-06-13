const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

const mongodbconnect = async()=>{
      const databaseconnection = await client.connect();
      const database = databaseconnection.db('e-commerce');
      let collection = database.collection('products');
      return collection;

}
module.exports = mongodbconnect;