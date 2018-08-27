const query = require('../lib/query');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	let row = await query.getSentenceAleatory();
	res.render('sentence', {text: row.Sentence, id: row.Id});
});

router.post('/vote', async (req, res) => {
	let row = await query.getSentenceAleatory(); 
	res.send(row);

	// TO DO: request validation
	query.insertVote(req.body.sentenceId, req.body.note);
});

module.exports = router;