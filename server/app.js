const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const insta = require('./instagram');

const app = express();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.get('/', (req,res) => res.send('Hello world'));


module.exports.app = app;
