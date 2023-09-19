const express = require("express");
const path = require('path');
const port = 4000;
const app = express();
const router = require('./routes/listroutes');
const db = require('./config/db');

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use('/public',express.static('public'));

// app.get('/', (req,res) => {
//     res.render('list');
// })

app.use('/',router);


app.listen(port, function(err) {
    if(err) {
        console.log("error in running the server");
    } else {
        console.log(`server is running on the port ${port}`);
    }
})