//import
const express = require("express");
const morgan = require("morgan");
const app = express();

//middleware functions
const sayHello = (req, res, next) => {
    res.send("Hello!");
  };



//instantiating middleware
//using morgan to console log live
app.use(morgan("dev"));
app.get("/hello", sayHello);

//exporting the express function
module.exports = app;