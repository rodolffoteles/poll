const query = require('../lib/query');
const { check, validationResult } = require('express-validator/check');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    let row = await query.getSentenceByMagnitude(2);
    let count = await query.getVoteCount();

    res.render('sentence', {
        firstSentence: row[0].Sentence, 
        firstId: row[0].Id,
        secondSentence: row[1].Sentence, 
        secondId: row[1].Id,
        token: req.csrfToken(),
        totalCount: count.total,
        negativeCount: count.negative,
        neutralCount: count.neutral,
        positiveCount: count.positive
    });
});

router.post('/vote', [
        check('sentenceId').isInt(),
        check('note').isInt({ min: -1, max: 1 })
    ], async (req, res) => {
        const errors = validationResult(req);

        let row = await query.getSentenceByMagnitude(1); 
        res.send(row[0]);

        if (errors.isEmpty()) {
            query.insertVote(req.body.sentenceId, req.body.note);
        }
});

module.exports = router;