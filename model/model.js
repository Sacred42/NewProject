const {Schema, model} = require('mongoose');

const CreateEl = new Schema ({
    title : {
        type : String,
        required : true
    }
    
});

module.exports = model('newCollection' , CreateEl);
