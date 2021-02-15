const mongoose = require('mongoose');

const User = mongoose.model(
    'users',
    {
        firstName:String,
        lastName:String,
        email:String,
        birthday:Date,
        password:String,
    },
    'users'
);

const save = async (userData) => {
    let user = new User(userData)
    let data = await user.save()
    return data;
};

const getOneByEmail = async (email) => {
    let data = await User.findOne({ email });
    return data;
};

const getOne = async (id) => {
    let data = await User.findOne({_id:id});
    return data;
};


const getOneForLogin = async (email) => {
    let data = await User.findOne({ email: email, active: true });
    return data;
};

module.exports = {
    save,
    getOne,
    getOneByEmail,
    getOneForLogin
};