const { Validator } = require('node-input-validator');

const registrationSchema = {
    first_name: 'required',
    last_name: 'required',
    email: 'required|email',
    password: 'required',
    dob: 'required'
};

const loginSchema = {
    email: 'required|email',
    password: 'required'
};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    let e = await v.check();
    if(!e) {
        throw v.errors;
    }
};

module.exports = {
    registrationSchema,
    loginSchema,
    validate
};