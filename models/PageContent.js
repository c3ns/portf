const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageContentSchema = new Schema({
    homeTitle:{
        type:String,
        maxLength:50,
        minlength:5
    },
    contactTitle:{
        type:String,
        maxLength:50,
        minlength:5
    },
    abilities:[{
        title:{
            type:String,
            maxLength:20
        },
        content:{
            type:String,
            maxLength:100,
        }
    }],
    skills:[{
        img:String,
        level:{
            type:Number,
            min:0,
            max:100
        }
    }],
    projects:[{
        content:String,
        link:String,
        img:String
    }],
});

module.exports = mongoose.model('contents', PageContentSchema);