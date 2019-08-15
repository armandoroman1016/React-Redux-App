import React from 'react'
import { connect } from 'react-redux';

const BreweryList = props => {

    return (
        <h2>Check Out These Breweries!</h2>
    )

}

const mapStateToProps = state => {
    return {
        title : state.title
    }
}

export default connect(mapStateToProps, {})(BreweryList)
