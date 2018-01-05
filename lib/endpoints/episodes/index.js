const e = {};

e.getEpisodes = require(`./get-episodes.js`);
e.getEpisodeById = require(`./get-episode-by-id`);
e.getEpisodesBySeason = require('./get-episodes-by-season');
e.getEpisodesByQueen = require('./get-episodes-by-queen');

e.create = require(`./create`);

module.exports = e;