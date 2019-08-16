import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import BreweryCard from './BreweryCard'

const BreweryList = props => {

    return (
        <div>
        {props.breweries.length ? (
            <div className = 'brewery-container'>
                <h2>Checkout some of our Breweries!</h2>
                <Grid columns='three' divided >
                    <Grid.Row>
                {props.breweries.map(brewery => {
                    return( 
                        <Grid.Column className = 'brewery' key = {brewery.id} style = {{boxShadow: 'none'}}>
                            {<BreweryCard brewery = {brewery} buttonText = {'Add To Favorites'}/>}
                        </Grid.Column>
                    )
                })}
                    </Grid.Row>
                </Grid>
            </div>
         ) : (
            ''
         )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries : state.breweries
    }
}

export default connect(mapStateToProps, {})(BreweryList)
