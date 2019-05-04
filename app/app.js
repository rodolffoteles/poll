const express = require('express');
const bodyParser = require('body-parser');
const validator = require('express-validator');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const query = require('./lib/query');
const config = require('./config/default');

console.log('starting express...');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(csurf({ cookie: true }));
app.use(validator());

app.use('/', require('./routers/index'));

query.loadTable().then(() => {
    app.listen(config.port)
    console.log('listening...')
})
