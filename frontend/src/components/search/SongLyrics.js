import React, { Component } from 'react';

class SongLyrics extends Component {
    render() {
    let songID = this.props.match.params.trackname
    let songObj = this.props.allBeers.find(eachSong => {
      return eachSong._id === songID
    })

    console.log(songObj)
    return (
      <div>
        {/* {beerObj? 
        (<div>
           <img src={beerObj.image_url} alt={beerObj.name}/>
           <h1>{beerObj.name}</h1>
           <p>{beerObj.tagline}</p>
           <h4>{beerObj.first_brewed}</h4>
           <h4>{beerObj.attenuation_level}</h4>
           <h6>{beerObj.description}</h6>
           <h3>{beerObj.contributed_by}</h3>
        </div>):
        ("Loading...")} */}
        
      </div>
    )
    }
}

export default SongLyrics;