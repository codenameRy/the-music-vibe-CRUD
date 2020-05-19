const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    // Schema - Iteration 1 - Create Fields for Profile Scheme
      favoriteArtists: ([String]),
      favoriteSongs: ([String]),
    //   image: {
    //     type: String,
        
    //   },
    //   description: String,
    //   showtimes: ([String])
  });
  
  const Profile = mongoose.model('Profile', profileSchema);
  
  module.exports = Profile;