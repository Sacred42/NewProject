const express = require('express');
const schema = require('../model/model');
const router = express();

router.get('/', async (req, res)=>{
const datesDB = await schema.find({}).lean();
 res.render('1page' , {datesDB : datesDB});
});

router.post('/2page' , (req,res)=>{
    const NewElem = new schema({
        title : req.body.title
    });
    NewElem.save();
    res.render('2page');
});



module.exports = router;