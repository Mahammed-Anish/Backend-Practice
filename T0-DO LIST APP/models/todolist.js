const mongoose = require('mongoose');
const listSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const list = mongoose.model('TodoList',listSchema);
module.exports = list;
