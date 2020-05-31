const express = require("express");
const router4 = express.Router();
const mysqlConnection = require("../dbConnection");

//configuring rout to what to do (this case its a sql select query)
router4.delete("/:id", (req, res)=>{
	mysqlConnection.query('DELETE from users WHERE PersonID = ?',[req.params.id], (err, rows, fields) =>{
        if (!err)
          {
            //res.send(JSON.stringify({"status": 200, "error": null, "response": rows}));
            res.send('deleted');
          }
        else
          {
            console.log(err);
          }
        });
    });

    module.exports = router4;