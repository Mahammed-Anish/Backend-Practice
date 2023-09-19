const listData = require('../models/todolist');

exports.getData = async (req,res) => {
    try {
        const list = await listData.find({}).exec();
        res.render('list', {
            lists:list
        });
    } catch(error) {
        console.log("Error in fetching the data from the database");
        res.redirect('back');
    }
}

exports.createTask = async (req,res) => {
    try {
        const {description,category,date} = req.body;
        const taskAdded = await listData.create({description,category,date});
        console.log(taskAdded);
        res.redirect('back');
    } catch(error) {
        console.log("Error in adding the task",error);
        res.redirect('back');
    }
}

exports.deleteTask = async (req,res) => {
    try {
        let id = req.query.id;
        const deleted = await listData.findByIdAndDelete(id);
        console.log("Task is Successfully deleted", deleted);
        return res.redirect('back');

    } catch(error) {
        console.log("Error in deleting the task",error);
        return res.redirect('back');
    }
}