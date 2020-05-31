const mysql = require("mysql");
//creating mysql connectin object 
var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'root',
    password : 'root',
    database : 'apibase',
    multipleStatements : true
}); 

//starting the connection
mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("DB is Connected : Great");
        }
    else
        {
            console.log("Connection Failure");
        }
    
});

module.exports = mysqlConnection;
