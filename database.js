const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'mapa_pressao-01'
});

con.connect( (err) => {
	if (err) console.error('Database connection was closed.');
	console.log('Mysql connected!');
});

con.query = util.promisify(con.query);

const insertSentences = async () => {
	let step = 100;
	let max_query = await con.query('SELECT MAX(id) FROM news');
	let min_query = await con.query('SELECT MIN(id) FROM news');
	let max_id = max_query[0]['MAX(id)'];
	let min_id = max_query[0]['MIN(id)'];

	for(var id=min_id; id<=max_id; id+=step){
		let select_all_query = `SELECT * FROM news WHERE id >= ${id} AND id < ${id+step}`;
		let sentences, new_id, text;
		let results = await con.query(select_all_query);

		for(var i=0; i<results.length; i++){
			sentences = results[i].Body.trim().split('. ');
			new_id = results[i].Id;

			for(var j=0; j<sentences.length; j++){
				text = sentences[j].replace(/'/g, '"').trim();
				text = text.endsWith('.') ? text : text+'.';
				let update_query = `INSERT INTO sentence VALUES (null, ${new_id}, '${text}')`;
				
				await con.query(update_query);
				console.log('Updated!' + new_id);
			}
		}
	}
}

insertSentences();


	
	
		

		
			

			
				