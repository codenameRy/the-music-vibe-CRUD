const router = require('express').Router();
const {getLyrics} = require('genius-lyrics-api');
const g = require("genius-lyrics")
const axios = require('axios');

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

//genius-lyrics-api 
// router.get('/search/:artistname/:title', (req, res) => {
//   const options = {
//     apiKey: 'HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX', // genius developer access token
//     title: req.params.title,
//     artist: req.params.artistname,
//     optimizeQuery: true
//   };
//   getLyrics(options).then(lyrics => {
//     console.log(lyrics)
//     res.json({lyrics})
//   });
// })



//Retrieve Artist Information (Genius Lyrics Params - Zyrouge)
router.get('/search/:artistsandsongs/', (req, res, next) => {
  axios.get(`https://api.genius.com/search?q=${req.params.artistsandsongs}`, {headers: {Authorization: process.env.BEARER}})
  .then(response => res.status(200).json(response.data))
  .catch(err => {console.log(err); next(err)})
})

//NPM Module for lyrics
router.get('/searchNPM/:lyrics/', (req, res, next) => {
  const Genius = new (g.Client)("HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX");
  console.log("backend", req.params.lyrics)
  Genius.tracks.search(req.params.lyrics)
  .then(results => {
    const song = results[0];
    song.lyrics()
    .then(lyrics => {
        console.log(lyrics);
        res.json (lyrics)
    })
})
.catch(err => console.error(err));
})


module.exports = router;
