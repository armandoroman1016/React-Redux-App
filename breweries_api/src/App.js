import React from 'react';
import BreweryList from './components/BreweryList'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getData } from './actions'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar'

function App(props) {
  return (
    <div className="App">
      <NavBar/>
      <Button onClick = {props.getData}>Get Data</Button>
      <BreweryList/>
    </div>
  );
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps, {getData})(App)