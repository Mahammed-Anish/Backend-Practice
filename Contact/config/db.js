const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://Mahammed_Anish_27:<password>b@cluster0.aptbi7a.mongodb.net/contactlist');
mongoose.connect('mongodb+srv://Mahammed_Anish_27:<password>@cluster0.ambbxir.mongodb.net/')

const db = mongoose.connection;
db.on('error',(error)=> {
    console.log('error occurred while connecting to database',error);
});

db.once('open', ()=> {
    console.log('Successfully Connected to the database');
})
