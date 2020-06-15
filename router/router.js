const express = require('express');
const schema = require('../model/model');
const router = express();

router.get('/', (req, res)=>{
 res.render('1page');
});

router.post('/2page' , (req,res)=>{
    const NewElem = new schema({
        title : req.body.title
    });
    NewElem.save();
    res.render('2page');
});



module.exports = router;