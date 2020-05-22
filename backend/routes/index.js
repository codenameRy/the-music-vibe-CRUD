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
// const Genius = new (g.Client)("HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX");

// Genius.artists.get("653414")
// .then(artist => {
//     console.log(artist);
//     // res.json({artist});
// })
// // .catch(err => console.error(err));
// })

//Retrieve Artist - Song Information (Genius Lyrics Params - Zyrouge)
// const Genius = new (g.Client)("HfpseRNO8FkATyb95RjYibhpafpw_3SRZNbmUISokvdI8WndZmRpyAoefErtB2PX");

// Genius.artists.get("653414")
// .then(artist => {
//     artist.songs()
//     .then(songs => {
//         console.log(songs);
//     })
// })
// .catch(err => console.error(err));


module.exports = router;
