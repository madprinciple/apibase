const express = require("express");
const bodyParser = require("body-parser");
const usersRouter = require('./routes/users');
const singleUsersRouter = require('./routes/singleuser');
const addUsersRouter = require('./routes/adduser');
const deleteUsersRouter = require('./routes/deleteuser');

const port = 9110;

var app = express(); //creating express base application

app.use(bodyParser.json()); //configure bodyparser to app

app.use("/api/users", usersRouter);
app.use("/api/users/", singleUsersRouter);
app.use("/api/adduser", addUsersRouter);
app.use("/api/deleteuser/", deleteUsersRouter);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


