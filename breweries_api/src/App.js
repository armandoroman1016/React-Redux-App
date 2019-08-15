import React from 'react';
import BreweryList from './components/BreweryList'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <LandingPage />
      <BreweryList/>
    </div>
  );
}

export default App