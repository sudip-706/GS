const express = require("express");
//server of express
const app = express();

app.get("/home",function(req,res){
    res.send("<h1> Hello server </h1>")
})




app.listen(3000,function(req,res){
    console.log("Server started at 3000 ")
})