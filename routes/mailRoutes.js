const express = require('express');
const router = express.Router();
const adminAuth = require('../auth/adminAuth');
const Mail = require('../models/Mail');
const {catchErrors} = require('../utils/errorHandler');
const validateMail = require('../validation/validateMail');


// @route   POST     /api/mail
// @acess   User
// @desc    save mail
router.post('/api/mail', catchErrors(async (req,res) => {
    const {errors, isValid} = validateMail(req.body);
    if(!isValid) return res.status(400).json(errors);
    const {name,email,subject,message} = req.body;
    const mail = new Mail({name,email,subject,message});
    await mail.save();
    res.json({message:'message sent'});
}));

// @route   GET     /api/admin/mail
// @acess   Admin
// @desc    get mails
router.get('/api/mail', adminAuth, catchErrors(async (req,res) => {
    const mails = await Mail.find();
    res.send(mails)
}));

module.exports = router;




