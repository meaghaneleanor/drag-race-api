const express = require(`express`);

const router = express.Router();

const challengeRouter = require(`./challenges`);
const episodeRouter = require(`./episode`);
const judgesRouter = require(`./judges`);
const lipsyncRouter = require(`./lipsync`);
const seasonRouter = require(`./season`);
const queenRouter = require(`./queens`);
const ohHoneyRouter = require(`./oh-honey`);

router.use(`/challenges`, challengeRouter);
router.use(`/episodes`, episodeRouter);
router.use(`/judges`, judgesRouter);
router.use(`/lipsyncs`, lipsyncRouter);
router.use(`/queens`, queenRouter);
router.use(`/seasons`, seasonRouter);
router.use(`/oh-honey`, ohHoneyRouter);

router.use(`/*`, (req, res) => {
    res.status(400).json({ message: 'no route found.' });
});

module.exports = router;
