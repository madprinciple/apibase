const express = require("express");
const router2 = express.Router();
const mysqlConnection = require("../dbConnection");

//configuring rout to what to do (this case its a sql select query)
router2.get("/:id", (req, res)=>{
	mysqlConnection.query('SELECT * from users WHERE PersonID = ?',[req.params.id], (err, rows, fields) =>{
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

    module.exports = router2;