const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)

const mongodbconnect = async()=>{
    const connection = await client.connect();
    const db = connection.db('e-commerce');
    const collection = db.collection('products');
    return collection;

}

module.exports = mongodbconnect;