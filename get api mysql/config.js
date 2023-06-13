const mysql = require('mysql')
const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "csit77_suraj"

})

module.exports = connection;