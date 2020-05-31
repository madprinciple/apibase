const express = require("express");
const router3 = express.Router();
const mysqlConnection = require("../dbConnection");

//configuring rout to what to do (this case its a sql select query)
router3.post("/", (req, res)=>{
    console.log(req.body);

    var sql = "INSERT INTO users VALUES(null, '" + req.body.LastName +"', '"+ req.body.FirstName +"','"+ req.body.Address + "','"+ req.body.City + "')";
	mysqlConnection.query(sql , (err,rows) =>{
        if (!err)
          {
            //res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
            res.send('success');
          }
        else
          {
            console.log(err);
          }
        });
    });

    module.exports = router3;