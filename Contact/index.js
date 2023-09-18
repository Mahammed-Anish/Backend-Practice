const express = require("express");
const path = require('path');
const port = 5000;
const app = express();
const contactRouter = require('./routes/contact');
const db = require('./config/db');
const Contact = require('./models/contact');
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use('/',contactRouter);

// app.get('/',(req,res)=> {
//     return res.render('contact', {
//         title: "my project"
//     });
// })

app.listen(port, function(err) {
    if(err) {
        console.log("error in running the server");
    } else {
        console.log(`server is running on the port ${port}`);
    }
})