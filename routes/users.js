const express = require("express");
const router = express.Router();
const mysqlConnection = require("../dbConnection");

//configuring rout to what to do (this case its a sql select query)
router.get("/", (req, res)=>{
	mysqlConnection.query('SELECT * from users', (err, rows, fields) =>{
        if (!err)
          {
            //res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
            res.send(rows);
          }
        else
          {
            console.log(err);
          }
        });
    });

    module.exports = router;