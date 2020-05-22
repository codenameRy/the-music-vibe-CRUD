import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile';
import SearchBar from './components/search/SearchBar';
import NewSearchBar from './components/search/NewSearchBar'
import actions from './services/index';
import axios from 'axios';

require('dotenv').config();


class App extends Component {
  
  state = { 
    geniusLyrics: []
  }
  
  async componentDidMount() {
    //
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('coolest ')
    
    // Genius API
    let lyrics = await actions.getArtist("kendrick%20lamar")
    console.log(lyrics.data)



  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

  render(){

    return (
    <BrowserRouter>
      {this.state.email}
      <nav>
        <NavLink to="/">Home |</NavLink>

        {this.state.email ? 
          <Fragment>
           <NavLink onClick={this.logOut} to='/'>Log Out |</NavLink> 
           <NavLink to="/profile">Profile|</NavLink>
           </Fragment>
           :
           <Fragment>
           <NavLink to="/sign-up">Sign Up |</NavLink>
           <NavLink to="/log-in">Log In |</NavLink>
           </Fragment>
          }
          <NewSearchBar/>
          {/* <SearchBar/> */}
      </nav>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state}/>} />
        <Route exact path="/searchbar" render={(props) => <SearchBar {...props} />} />
        
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  }
}
export default App;
