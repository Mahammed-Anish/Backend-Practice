const express = require("express");
const port = 8000;
const app = express();
const data = require('./Models/Data.json');
const router = require("./Router/users");

// one way of routing 
// app.get('/users',(req,res)=> {
//     res.send({data});
// } )

// second way of routing
app.use('/',router);

app.listen(port, function(err) {
    if(err) {
        console.log("error in running the server");
    } else {
        console.log(`server is running on the port ${port}`);
    }
})