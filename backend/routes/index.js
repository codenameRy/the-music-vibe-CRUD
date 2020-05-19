const router = require('express').Router();
// const genius = require('genius-lyrics')
const {getLyrics} = require('genius-lyrics-api');

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

const options = {
  apiKey: 'HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX', // genius developer access token
  title: 'Blinding Lights',
  artist: 'The Weeknd',
  optimizeQuery: true
};

getLyrics(options).then(lyrics => console.log(lyrics));

module.exports = router;
