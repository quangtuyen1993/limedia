var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users");

var app = express();
// app.use(function (req, res, next) {
//   next(createError(404));
// });
app.get("/",(req,res,next)=>{
    res.status(200).send({
        message:"hello word"
    })
})
var port=3000
app.listen(port,()=>{
    console.log(`i am listen port ${port}`)
})

