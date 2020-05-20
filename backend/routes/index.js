const router = require('express').Router();
const {getLyrics} = require('genius-lyrics-api');
const g = require("genius-lyrics")

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
//     // console.log(lyrics)
//     res.json({lyrics})
//   });
// })

// Genius Lyrics Zyrouge
// console.log(g)
const Genius = new (g.Client)("HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX")
Genius.artists.get("653414")
.then(artist => {
    console.log(artist);
})
.catch(err => console.error(err));


module.exports = router;
