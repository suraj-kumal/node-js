const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url)

const dbconnection = async()=>{
    let connection = await client.connect();
    let data = connection.db('e-commerce');
    let collection = data.collection('products');
    return collection;
}
module.exports =dbconnection;