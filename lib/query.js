const mysql = require('mysql');
const config = require('../config/default');

const pool = mysql.createPool({
	user 		: config.database.USERNAME,
	password 	: config.database.PASSWORD,
	database 	: config.database.DATABASE,
	host 		: config.database.HOST
});

var query = (sql, values) => {
  return new Promise((resolve, reject) => {
  	pool.query(sql, (err, results) => {
  		if (err) { reject(err); } 
  		else { resolve(results); }
  	});
  });
};

var getAleatoryNumber = (min, max) => {
	return Math.floor((Math.random()*max) + min)
};

exports.getSentenceByMagnitude = async () => {
	let aleatoryId, aleatoryRow;
	let selectJoin = 	
				`SELECT sentence_my.Sentence, sentence_my.NewId 
				FROM sentence_my INNER JOIN news 
				ON sentence_my.NewId = news.Id WHERE news.OverallMagnitude >= 20`;

	await query(selectJoin).then((value) => {
		aleatoryId = getAleatoryNumber(0, value.length);
		aleatoryRow = value[aleatoryId];
	}, (reason) => {
		console.log(reason);
	});

	return aleatoryRow;
}

exports.getSentenceByAdjective = async () => {
	let aleatoryId, aleatoryRow;
	let selectAdjective = `SELECT * from sentence_my WHERE ______ >= 20`;

	await query(selectAdjective).then((value) => {
		aleatoryId = getAleatoryNumber(0, value.length);
		aleatoryRow = value[aleatoryId];
	}, (reason) => {
		console.log(reason);
	});

	return aleatoryRow;
}

exports.getSentenceAleatory = async () => {
	let id = getAleatoryNumber(0, 3000);
	let selectQuery = `SELECT * FROM sentence_my WHERE id = ${id}`
	let aleatoryRow;

	await query(selectQuery).then((value) => {
		aleatoryRow = value[0];
	}, (reason) => {
		console.log(reason);
	})

	return aleatoryRow;
}

exports.insertVote = (id, note) => {
	let insertQuery = `INSERT INTO sentiment VALUES (null, ${id}, ${note})`;
	query(insertQuery);
};


