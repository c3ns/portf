const express = require('express');
const router = express.Router();
const adminAuth = require('../auth/adminAuth');
const Mail = require('../models/Mail');

// @route   POST     /api/mail
// @acess   User
// @desc    save mail
router.post('/api/mail', async (req,res) => {
    const {name,email,subject,message} = req.body;
    try{
        const mail = new Mail({name,email,subject,message});
        await mail.save();
        res.json(mail)
    }catch (err){
        console.log(err);
    }
});

// @route   GET     /api/admin/mail
// @acess   Admin
// @desc    get mails
router.get('/api/mail', adminAuth, async (req,res) => {
    try{
        const mails = await Mail.find();
        res.send(mails)
    }catch (err){
        console.log(err);
    }
});

module.exports = router;




