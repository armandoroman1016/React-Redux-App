import React from 'react';
import {Route, Switch} from 'react-router-dom'
import BreweryList from './components/BreweryList'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Favorites from'./components/Favorites';

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path = '/' component = {LandingPage}/>
        <Route path = '/breweries' component = {BreweryList}/>
        <Route path = '/favorites' component = {Favorites}/>
        <BreweryList />
      </Switch>
    </div>
  );
}

export default App