const Model = require('./model');

function addUser(user){
    const myUser = new Model(user);
    return myUser.save();
}

async function getUsers(filtername){
    let filter = {};

    if(filtername != null){
        filter = { name: filtername }
    }

    const users = await Model.find(filter);
    return users;
}

module.exports = {
    add: addUser,
    list: getUsers,
}