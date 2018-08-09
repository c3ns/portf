const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const pageContentRoutes = require('./routes/pageContentRoutes');
const mailRoutes = require('./routes/mailRoutes');
require('dotenv').config();
require('./db/dbConnection')();

// init database
require('./utils/createAdmin')();
require('./utils/createContent')();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//static files
app.use(express.static(__dirname+'/public/content'));
app.use('/', authRoutes);
app.use('/', pageContentRoutes);
app.use('/', mailRoutes);

if(process.env.NODE_ENV==='production'){
    //static files
    app.use(express.static(__dirname+'/client/build'));
    app.get('/*', (req,res)=>{
        res.sendFile(__dirname+'/client/build/index.html')
    })
}


app.listen(process.env.DB_PORT, () => {
    console.log(`server is runing on port ${process.env.DB_PORT}`);
});
