import React from 'react';
import { getData } from '../actions'
import { connect } from 'react-redux';

const LandingPage = props => {

    return (
        <div className = 'landing-page'>
            <h1 className = 'landing-header'>
                Welcome Beer Enthusiasts!
            </h1>
            <h4>To find awesome breweries near you click the button below.</h4>
            <button onClick = {props.getData}>Get Started</button>
        </div>
    )
}

const mapStateToProps = state =>{
    return state
}
  
export default connect(mapStateToProps, { getData })(LandingPage)