const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true } );
    mongoose.connection
        .once('open', ()=>console.log('connected to DB'))
        .on('error', (err)=>console.log(err));
    mongoose.Promise = global.Promise;
}