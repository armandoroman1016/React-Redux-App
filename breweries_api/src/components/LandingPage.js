import React from 'react';
import { getData } from '../actions'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router';


const LandingPage = props => {
    return (
        <div className = 'landing-page'>
        {props.fireRedirect ? <Redirect to = '/breweries'/> : false}        
            <h1 className = 'landing-header'>
                Welcome Beer Enthusiasts!
            </h1>
            <h4>To find awesome breweries near you click the button below.</h4>
            <button onClick = {props.getData}>
                Get Started
            </button>
        </div>
    )
}
const mapStateToProps = state =>{
    return {
        breweries : state.breweries,
        fireRedirect : state.fireRedirect
    }
}
export default connect(mapStateToProps, { getData })(LandingPage)