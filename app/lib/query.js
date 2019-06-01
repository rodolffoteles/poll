const mysql = require('mysql');
const config = require('../config/default');

// Max quantity of votes a sentence can receive
const maxVoteCount = 5;
// Max quantity of sentences that are accumulating votes at one time
var activeSentenceCount = 500;
// Array with all sentences that hasn't received enough votes
var availableSentences = [];
// Subset of available sentences that are currently being presented to users
var activeSentences = new Array(activeSentenceCount);

const pool = mysql.createPool({
    user     : config.database.USERNAME,
    password : config.database.PASSWORD,
    database : config.database.DATABASE,
    host     : config.database.HOST,
    port     : config.database.PORT,
    charset  : config.database.CHARTSET
});

function getAleatoryNumber(min, max){
    return Math.floor((Math.random()*max) + min)
};

function loadTable() {
    let selectJoin =
                `SELECT sentence.id, sentence, count 
                 FROM sentence LEFT JOIN
                    (SELECT sentence_id, count(*) AS count FROM sentiment
                    GROUP BY sentiment.sentence_id)
                    AS sentence_per_vote
                 ON sentence.id = sentence_per_vote.sentence_id
                 WHERE count IS NULL OR count < ${maxVoteCount}`;

    return new Promise((resolve, reject) => {
        pool.query(selectJoin, (err, result) => {
            if (err) {
                reject(err);
            } else {
                availableSentences = result;
                loadActiveSentences();
                resolve(null);
            }
        });
    });
}

function loadActiveSentences(){
    for(let i = 0; i < activeSentenceCount; i++){
        let sentence = availableSentences.pop();

        // Update the quantity of active sentences if there's not enough available sentences
        if(sentence == null){
            activeSentenceCount = i;
            break;
        } 
            
        sentence.index = i;
        sentence.count = (sentence.count == null) ? 0 : sentence.count
        activeSentences[i] = sentence;
    }
}

function newActiveSentence(index){
    delete activeSentences[index];

    let sentence = availableSentences.pop();
    sentence.index = index;
    sentence.count = (sentence.count == null) ? 0 : sentence.count;
    activeSentences[index] = sentence;
}

function getSentence(quant){
    let aleatoryRow = [];
    for(let i = 0; i < quant; i++){
        aleatoryIndex = getAleatoryNumber(0, activeSentenceCount);
        aleatoryRow.push(activeSentences[aleatoryIndex]);
    }
    return aleatoryRow;
}

function getVoteCount(){
    let groupBy = 'SELECT sentiment, count(*) AS count FROM sentiment GROUP BY sentiment';
    let count = { total: 0, negative: 0, neutral: 0, positive: 0 };

    return new Promise((resolve, reject) => {
        pool.query(groupBy, (err, result, fields) => {
            result.forEach((value) => {
                switch(value.sentiment){
                    case 1:
                        count.positive = (value.count == null) ? 0 : value.count;
                        break;
                    case 0:
                        count.neutral = (value.count == null) ? 0 : value.count;
                        break;
                    case -1:
                        count.negative = (value.count == null) ? 0 : value.count;
                        break;
                }
            });
            count.total = count.positive + count.negative + count.neutral;

            resolve(count);
        })
    });
}

function insertVote(id, index, note) {
    // Delete sentence from active sentences array if it has received enough votes
    if( activeSentences[index].id == id &&
        activeSentences[index].count++ >= maxVoteCount) {
        newActiveSentence(index);
    }

    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let insertQuery = `INSERT INTO sentiment(sentence_id, sentiment, created_at)
                       VALUES (${id}, ${note}, '${date}')`;

    pool.query(insertQuery, (err, result, fields) => {
        if(err) throw err;
    });
}

module.exports = {
    loadTable,
    getSentence,
    getVoteCount,
    insertVote
}
