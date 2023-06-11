const mysql =require('mysql2');
require('dotenv').config()

const connect = async () => {
    var mysqlConnection = mysql.createConnection({
        host: process.env.SQL_HOST,
        user: process.env.SQL_USERNAME,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE
    })
     mysqlConnection.connect((err)=>{
        if(err){
            console.log('Error in DB connection: '+JSON.stringify(err,undefined,2));
        }
    })
    return mysqlConnection;
}
module.exports = {connect}
