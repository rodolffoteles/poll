const mysql = require('mysql');
const config = require('../config/default');

var sentencesMagitude, sentencesAdjective;

const pool = mysql.createPool({
	user 		: config.database.USERNAME,
	password 	: config.database.PASSWORD,
	database 	: config.database.DATABASE,
	host 		: config.database.HOST
});

function query(sql, values){
  return new Promise((resolve, reject) => {
  	pool.query(sql, (err, results) => {
  		if (err) { reject(err); } 
  		else { resolve(results); }
  	});
  });
};

function getAleatoryNumber(min, max){
	return Math.floor((Math.random()*max) + min)
};

async function updateTables(callback){
	let selectJoin = 	
				`SELECT sentence_my.Sentence, sentence_my.Id 
				FROM sentence_my INNER JOIN news 
				ON sentence_my.NewId = news.Id WHERE news.OverallMagnitude >= 20`;

	await query(selectJoin).then((value) => {
		sentencesMagitude = value;
	}, (reason) => {
		console.log(reason);
	});

	let selectAdjective = `SELECT Sentence, Id from sentence_my WHERE numberAdj BETWEEN 5 AND 10`;

	await query(selectAdjective).then((value) => {
		sentencesAdjective = value;
	}, (reason) => {
		console.log(reason);
	});

	callback();
}

function getSentenceByMagnitude(quant){
	let aleatoryRow = []
	for(let i = 0; i < quant; i++){
		aleatoryId = getAleatoryNumber(0, sentencesMagitude.length);
		aleatoryRow.push(sentencesMagitude[aleatoryId]);
	}
	return aleatoryRow;
}

function getSentenceByAdjective(quant){
	let aleatoryRow = []
	for(let i = 0; i < quant; i++){
		aleatoryId = getAleatoryNumber(0, sentencesAdjective.length);
		aleatoryRow.push(sentencesAdjective[aleatoryId]);
	}
	return aleatoryRow;
}

async function getSentenceAleatory(quant) {
	let aleatoryRow = [];

	for(let i = 0; i < quant; i++){
		let id = getAleatoryNumber(0, 579776);
		let selectQuery = `SELECT Sentence, Id FROM sentence_my WHERE id = ${id}`;
		await query(selectQuery).then((value) => {
			aleatoryRow.push(value[0]);
		}, (reason) => {
			console.log(reason);
		});
	}

	return aleatoryRow;
}

function insertVote(id, note) {
	let insertQuery = 	`INSERT INTO sentiment VALUES (null, ${id}, ${note})`;
	query(insertQuery);
}

module.exports = {
	updateTables,
	getSentenceByMagnitude,
	getSentenceByAdjective,
	getSentenceAleatory,
	insertVote
}