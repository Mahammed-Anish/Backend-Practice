const data = require('../Models/Data.json');

function getUsers(req,res) {
    const users = data;
    res.send({users});
}

module.exports = {getUsers};