const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

// @route   /api/login
// @acess   Public
// @desc    Login user

router.post('/api/login', async (req,res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message: 'bad login credentials'});

    const match = await bcrypt.compare(password, user.password);
    if(!match) return res.status(400).json({message: 'bad login credentials'});
    const data = _.pick(user,['_id','email','isAdmin']);
    const token = jwt.sign(data, process.env.JWT_KEY);
    res.send(token);
});

module.exports = router;

