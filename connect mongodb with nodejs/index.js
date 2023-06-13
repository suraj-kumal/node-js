const {MongoClient} = require('mongodb')
// const mongoclient = require('mongodb').mongoclient();
// same thing as first line just line 1 is modern 
const url= 'mongodb://127.0.0.1:27017/';
const databaseName='e-commerce';
const client= new MongoClient(url);

async function getData()
{
    let result = await client.connect();
    let db= result.db(databaseName);
    let collection = db.collection('products');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();


