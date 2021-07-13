const express = require("express");
const app = express();

app.get("/courses", (req, res) =>{
   return res.json(
       ["Curso 1", "Curso 2", "Curso 3"]
   );
});

app.post("/courses", (req, res) =>{
    return res.json(
        ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]
    );
});

/* oldvalue: Curso 1 
   newvalue: Curso 6  
*/
app.put("/course/:oldvalue/name/:newvalue", (req, res) =>{
    return res.json(
        ["Curso 6", "Curso 2", "Curso 3", "Curso 4"]
    );
});

app.patch("/course/:id", (req, res) =>{
    return res.json(
        ["Curso 6", "Curso 7", "Curso 3", "Curso 4"]
    );
});

app.delete("/courses", (req, res) =>{
    return res.json(
        ["Curso 6", "Curso 7", "Curso 4"]
    )
});

app.listen(3333, ()=>{
    console.log("server is running");
});