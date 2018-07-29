const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const pageContentRoutes = require('./routes/pageContentRoutes');
require('dotenv').config();
require('./db/dbConnection')();

// init database
require('./utils/createAdmin')();
require('./utils/createContent')();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//static files
app.use(express.static(__dirname+'/public'));

app.use('/', authRoutes);
app.use('/', pageContentRoutes);

app.listen(process.env.DB_PORT, () => {
    console.log(`server is runing on port ${process.env.DB_PORT}`);
});
