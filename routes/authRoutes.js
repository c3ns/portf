const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const {catchErrors} = require('../utils/errorHandler');
const validateLogin = require('../validation/validateLogin');
const validatePasswords = require('../validation/validatePasswords');
const adminAuth = require('../auth/adminAuth');

// @route   /api/login
// @acess   Public
// @desc    Login user

router.post('/api/login', catchErrors(async (req,res) => {
    const {errors, isValid} = validateLogin(req.body);
    if(!isValid) return res.status(400).json(errors);

    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        errors.login = 'bad login credentials';
        return res.status(400).json(errors);
    }

    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        errors.login = 'bad login credentials';
        return res.status(400).json(errors);
    }

    const data = _.pick(user,['_id','email','isAdmin']);
    const token = jwt.sign(data, process.env.JWT_KEY);
    res.send(token);
}));


// @route   /api/changepass
// @acess   Admin
// @desc    Change password
router.post('/api/changepass',adminAuth, catchErrors(async (req,res) => {
    const {errors, isValid} = validatePasswords(req.body);
    if(!isValid) return res.status(400).json(errors);

    const {pass,newPass,rNewPass,email} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message: 'User not found'});

    const matchOld = await bcrypt.compare(pass,user.password);
    if(!matchOld) return res.status(400).json({message: 'Bad password'});

    if(newPass !== rNewPass) return res.status(400).json({message: 'Bad new passwords'});

    const hash = await bcrypt.hash(newPass, 10);

   user.password = hash;
   user.save();
   res.json({message: 'password changed'});
}));

module.exports = router;

