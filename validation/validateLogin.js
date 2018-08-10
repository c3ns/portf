const _ = require('lodash');

module.exports = (data) => {
    if(!data.email) data.email='';
    if(!data.password) data.password='';
    const errors = {};
    if(!data.email) errors.email = 'e-mail is required';
    if(!data.password) errors.password = 'password is required';
    return {errors, isValid: _.isEmpty(errors)}
}