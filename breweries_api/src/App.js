import React from 'react';
import './App.scss';
import BreweryList from './components/BreweryList'
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getData } from './actions'

function App(props) {
  return (
    <div className="App">
      <div>Hello</div>
      <Button onClick = {props.getData}>Get Data</Button>
      <BreweryList/>
    </div>
  );
}

const mapStateToProps = state =>{
  return state
}

export default connect(mapStateToProps, {getData})(App)