const _ = require('lodash');

module.exports = (data) => {
    if(!data.pass) data.pass='';
    if(!data.newPass) data.newPass='';
    if(!data.rNewPass) data.rNewPass='';
    const errors = {};
    if(!data.pass) errors.pass = 'old password is required';
    if(data.newPass < 9) errors.newPass = 'password is too short';
    if(!data.newPass) errors.newPass = 'password is required';
    if(data.rNewPass <9) errors.rNewPass = 'password is required';
    if(!data.rNewPass) errors.rNewPass = 'password is required';

    if(data.newPass !== data.rNewPass)
        errors.passwords = 'passwords don\`t match';


    return {errors, isValid: _.isEmpty(errors)}
}