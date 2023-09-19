const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Mahammed_Anish_27:2g5sF2eb@cluster0.woekpl2.mongodb.net/');

const db = mongoose.connection;
db.on('error',(error)=> {
    console.log('error occurred while connecting to database',error);
});

db.once('open', ()=> {
    console.log('Successfully Connected to the database');
})
