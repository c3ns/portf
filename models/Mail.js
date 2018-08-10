const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MailSchema = new Schema({
    name:{
        type:String,
        required:true,
        maxlength:40,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        maxlength:40,
        minlength:3
    },
    subject:{
        type:String,
        required:true,
        maxlength:50,
        minlength:3
    },
    message:{
        type:String,
        required:true,
        maxlength:1000,
        minlength:5
    },
    view:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports = mongoose.model('mails', MailSchema);