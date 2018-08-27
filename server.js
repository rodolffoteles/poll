const express = require('express');
const mysql = require('mysql');
const url = require('url');
const body_parser = require('body-parser');
const validator = require('express-validator');
const config = require('./config/default');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended: true}));
app.use(validator());

app.use('/', require('./routers/index'));

app.listen(config.port);

