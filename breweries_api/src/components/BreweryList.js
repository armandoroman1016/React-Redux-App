import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import BreweryCard from './BreweryCard'

const BreweryList = props => {

    return (
        <>
        {props.breweries.length ? (
            <div className = 'brewery-container'>
                <h2>Checkout some of our Breweries!</h2>
                <Grid columns='three' divided >
                    <Grid.Row>
                {props.breweries.map(brewery => {
                    return( 
                        <Grid.Column className = 'brewery' key = {brewery.id} style = {{boxShadow: 'none'}}>
                            <BreweryCard brewery = {brewery}/>
                        </Grid.Column>
                    )
                })}
                    </Grid.Row>
                </Grid>
            </div>
         ) : (
            ''
         )}
        </>
    )
}

const mapStateToProps = state => {
    return {
        breweries : state.breweries
    }
}

export default connect(mapStateToProps, {})(BreweryList)
