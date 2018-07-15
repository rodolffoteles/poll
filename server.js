const express = require('express');
const mysql = require('mysql');
const url = require('url');
const body_parser = require('body-parser');

const app = express();

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mapa_pressao-01'
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

app.listen(8080, function () {
});

con.connect( (err) => {
	if (err) res.status(400).send('Database connection was closed.');
	console.log('Mysql connected!');
});

app.get('/', (req, res) => {
	let select_max_query = `SELECT MAX(id) FROM sentences`;
	let select_min_query = `SELECT MIN(id) FROM sentences`;
	var max_id, min_id, id;

	con.query(select_max_query, (err, results) => {
		if (err) res.status(400).send('MYSQL MAX QUERY ERROR');
		max_id = results[0]['MAX(id)']

		con.query(select_min_query, (err, results) => {
			if (err) res.status(400).send('MYSQL MIN QUERY ERROR');
			min_id = results[0]['MIN(id)'];

			id = Math.floor((Math.random()*max_id) + min_id)
			//console.log('Max = ' + max_id + '\tMin = ' + min_id + '\tId aleatório: ' + id);		

			let select_query = `SELECT * FROM sentences WHERE id = ${id} LIMIT 1`;

			con.query(select_query, (err, results) => {
				if (err) res.status(400).send('MYSQL QUERY ERROR');
				else res.render('sentence', {text: results[0].Text, id: results[0].NewId});
   			});
   		});
		
   	});
	
});

app.post('/submit', (req, res) => {
	let update_query = `INSERT INTO sentiment VALUES (null, ${req.body.sentenceId}, ${req.body.note})`;

	con.query(update_query, function(err, results){
		if (err) res.status(400).send('Could not update the database.');
		res.redirect('/');
	});
});




