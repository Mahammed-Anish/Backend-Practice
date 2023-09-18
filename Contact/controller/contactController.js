const Contact = require('../models/contact');

exports.contactRegistered = async (req,res)=> {
    try {
        const {name,phone} = req.body;
        const contactCreated = await Contact.create({name,phone});
        console.log(contactCreated);
        // this.sendToken(contactCreated,201,res);
        return res.redirect('back');
    } catch(error) {
        return res.redirect('back');
    }
}

exports.getAllData = async (req,res)=> {
    try {
        const contacts = await Contact.find({}).exec();
        res.render('contact', {
            title:"Contact list",
            contact_list: contacts
        })
    } catch(error) {
        console.log("error in fetching the data from the database");
        res.redirect('back');
    }
}

exports.deleteContact = async (req,res) => {
    try {
        let id = req.query.id;
        const deleted = await Contact.findByIdAndDelete(id);
        console.log("Contact is deleted Successfully",deleted);
        return res.redirect('back');
    } catch(error) {
        console.log("Error in deleting the contact",error);
        return res.redirect('back');
    }
}