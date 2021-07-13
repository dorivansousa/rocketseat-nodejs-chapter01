const express = require("express");
const app = express();

app.get("/text", (req, res) =>{
    res.send("Hello world!");
})

app.get("/json", (req, res) =>{
    res.json({message: "Hello world Ignite!"});
})

app.listen(3333, ()=>{
    console.log("server is running");
});