const mysql = require("mysql");
//creating mysql connectin object 
var mysqlConnection = mysql.createConnection({
    host     : 'localhost',
    port     : '3308',
    user     : 'root',
    password : 'root',
    database : 'apibase',
    multipleStatements : true
}); 

//starting the connection
mysqlConnection.connect((err)=>{
    if(!err)
        {
            console.log("DB is Connected");
        }
    else
        {
            console.log("Connection Failure");
        }
    
});

module.exports = mysqlConnection;
