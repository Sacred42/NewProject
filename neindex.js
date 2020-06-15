const express = require('express');
const exhbs = require('express-handlebars');
const app = express();
const mongoose = require('mongoose');
const router = require('./router/router');
const hbs = exhbs.create({
    defaultLayout : 'main',
    extname : 'hbs'
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');
app.use(express.urlencoded({extended : true}));
app.use(router);

try {
mongoose.connect('mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false', { useNewUrlParser : true, useFindAndModify : false , useUnifiedTopology: true});
app.listen(3000 , ()=>{ console.log('Все готово!')});   
} catch (error) {
    console.log(error);
}