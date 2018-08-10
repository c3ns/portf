const _ = require('lodash');
const isEmail = require('validator/lib/isEmail');

module.exports = (data) => {
    if(!data.name) data.name='';
    if(!data.email) data.email='';
    if(!data.subject) data.subject='';
    if(!data.message) data.message='';
    const errors = {};

    if(data.name.length<4) errors.name='name is too short';
    if(data.name.length>40) errors.name='name is too long';
    if(!data.name) errors.name='name  is required';

    if(data.email.length<4) errors.email='email is too short';
    if(data.email.length>40) errors.email='email is too long';
    if(!isEmail(data.email)) errors.email='e-mail is incorect';
    if(!data.email) errors.email='e-mail  is required';

    if(data.subject.length<4) errors.subject='subject is too short';
    if(data.subject.length>50) errors.subject='subject is too long';
    if(!data.subject) errors.subject='subject  is required';

    if(data.message.length<6) errors.message='message is too short';
    if(data.message.length>1000) errors.message='message is too long';
    if(!data.message) errors.message='message is required';

    return {errors, isValid: _.isEmpty(errors)}
};