const mysql = require('mysql');
const config = require('../config/default');

const minMagnitude = 50;
const maxVoteCount = 5;
const activeSentenceCount = 500;
var activeSentences = new Array(activeSentenceCount);
var sentencesMagitude;

const pool = mysql.createPool({
    user        : config.database.USERNAME,
    password    : config.database.PASSWORD,
    database    : config.database.DATABASE,
    host        : config.database.HOST,
    port        : config.database.PORT
});

function getAleatoryNumber(min, max){
    return Math.floor((Math.random()*max) + min)
};

function loadTable() {
    let selectJoin =
                `SELECT sentence, sentence_per_new.id AS sentence_id, count
                FROM new INNER JOIN
                    (SELECT new_id, sentence.id, sentence, count
                    FROM sentence LEFT JOIN
                        (SELECT sentence_id, count(*) AS count FROM sentiment
                        GROUP BY sentiment.sentence_id)
                        AS sentence_per_vote
                    ON sentence.id = sentence_per_vote.sentence_id
                    WHERE count IS NULL OR count < ${maxVoteCount})
                    AS sentence_per_new
                ON new.id = sentence_per_new.new_id
                WHERE overall_magnitude >= ${minMagnitude}`;

    return new Promise((resolve, reject) => {
        pool.query(selectJoin, (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
                sentencesMagitude = result;
                loadActiveSentences();
                resolve(null);
            }
        });
    });
}

function loadActiveSentences(){
    activeSentences = [];
    for(let i=0; i < activeSentenceCount; i++){
        let sentence = sentencesMagitude.pop();
        sentence.index = i;
        sentence.count = (sentence.count == null) ? 0 : sentence.count
        activeSentences[i] = sentence;
    }
}

function newActiveSentence(index){
    delete activeSentences[index];

    let sentence = sentencesMagitude.pop();
    sentence.index = index;
    sentence.count = (sentence.count == null) ? 0 : sentence.count;
    activeSentences[index] = sentence;
}

function getSentenceByMagnitude(quant){
    let aleatoryRow = [];
    for(let i = 0; i < quant; i++){
        aleatoryIndex = getAleatoryNumber(0, activeSentences.length);
        aleatoryRow.push(activeSentences[aleatoryIndex]);
    }
    return aleatoryRow;
}


function getVoteCount(){
    let groupBy = 'SELECT sentiment, COUNT(*) AS count FROM sentiment GROUP BY sentiment';
    let count = { total: 0, negative: 0, neutral: 0, positive: 0 };

    return new Promise((resolve, reject) => {
        pool.query(groupBy, (err, result, fields) => {
            result.forEach((value) => {
                switch(value.sentiment){
                    case 1:
                        count.positive = value.count;
                        break;
                    case 0:
                        count.neutral = value.count;
                        break;
                    case -1:
                        count.negative = value.count;
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
    if( activeSentences[index].SentenceId == id &&
        activeSentences[index].Count++ >= maxVoteCount) {
        newActiveSentence(index);
    }

    let date = new Date().toISOString().slice(0, 19).replace('T', ' ');
    let insertQuery = `INSERT INTO sentiment(sencente_id, sentiment, created_at)
                       VALUES (${id}, ${note}, '${date}')`;

    pool.query(insertQuery, (err, result, fields) => {
        if (err) throw err;
    });
}

module.exports = {
    loadTable,
    getSentenceByMagnitude,
    getVoteCount,
    insertVote
}
