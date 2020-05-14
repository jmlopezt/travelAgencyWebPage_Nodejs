const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes/routes.js')
const app = express();
const configs = require('./config');

require('dotenv').config({path: 'variables.env'})


// db.authenticate()
//     .then(()=>console.log('DB connected'))
//     .catch(error => console.log(error));

app.set('view engine', 'pug');
app.set('views',path.join(__dirname, './views'));
app.use(express.static('public'));

const config = configs[app.get('env')];
app.locals.title = config.webName;

app.use((req, res, next)=>{
    const date = new Date();
    res.locals.currentDate = date.getFullYear();
    res.locals.route = req.path;
    return next();
})

app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, ()=>{
    console.log('Running server on',host,':',port)
});