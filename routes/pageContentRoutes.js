const express = require('express');
const router = express.Router();
const PageContent = require('../models/PageContent');
const adminAuth = require('../auth/adminAuth');
const _ = require('lodash');

// @route   GET     /api/page-settings
// @acess   Public
// @desc    get page content
router.get('/api/page-content', async (req,res) => {
    try{
        const [page] = await PageContent.find();
        res.send(page)
    }catch (err){
        console.log(err);
    }
});


// @route   POST     /api/page-content
// @acess   admin
// @desc    set page content
router.post('/api/page-content',adminAuth, async (req,res) => {
    const {type} = req.body;
    try{
        const [page] = await  PageContent.find();
        delete req.body.type;

        if(_.size(req.body) === 1)
            page[type] = req.body.content;
        else
            page[type] = [...page[type],req.body];

        await page.save();
        res.json(page);
    }catch (err){
        console.log(err);
    }
})

module.exports = router;