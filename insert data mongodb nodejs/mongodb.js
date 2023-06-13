const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);

async function dbconnection(){
    let connection = await client.connect();
    let db = connection.db('e-commerce');
    return db.collection('products');
    
}   
module.exports = dbconnection;