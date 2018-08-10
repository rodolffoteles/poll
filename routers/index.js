const query = require('../lib/query');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	let row = await query.getJoinOnId();
	res.render('sentence', {text: row.Sentence, id: row.NewId});
});

router.post('/submit', async (req, res) => {
	query.insertVote(req.body.sentenceId, req.body.note);
	res.redirect('/');
});

module.exports = router;