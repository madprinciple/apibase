const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const port = 9110;

var app = express(); //creating express base application

app.use(bodyParser.json()); //configure bodyparser to app

app.use("/api/users", usersRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


