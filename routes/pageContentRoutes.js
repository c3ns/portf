const express = require('express');
const router = express.Router();
const PageContent = require('../models/PageContent');
const adminAuth = require('../auth/adminAuth');
const {catchErrors} = require('../utils/errorHandler');
const _ = require('lodash');

// @route   GET     /api/page-settings
// @acess   Public
// @desc    get page content
router.get('/api/page-content', catchErrors(async (req,res) => {
    const [page] = await PageContent.find();
    res.send(page)
}));


// @route   POST     /api/page-content
// @acess   admin
// @desc    set page content
router.post('/api/page-content/:type',adminAuth, catchErrors(async (req,res) => {
    const {type} = req.params;
    const [page] = await  PageContent.find();

    if(_.size(req.body) === 1)
        page[type] = req.body.content;
    else
        page[type] = [...page[type],req.body];

    await page.save();
    res.json(page);
}));



// @route   POST     /api/page-content/update
// @acess   admin
// @desc    update page content
router.post('/api/page-content/:type/update',adminAuth, catchErrors(async (req,res) => {
    const {type} = req.params;
    let [page] = await PageContent.find();
    if(_.size(req.body) === 1)
        page[type] = req.body[type]
    else
        page[type] = page[type].map((item) => {
            if(item._id == req.body._id)
                return req.body;
            return item
        });
    await page.save();
    res.json({message:`${type} updated`});
}));
module.exports = router;