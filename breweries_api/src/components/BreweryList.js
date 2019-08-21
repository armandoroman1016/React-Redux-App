import React from 'react'
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import BreweryCard from './BreweryCard'


const BreweryList = props => {
    return (
        <div>
        {props.breweries.length ? (
            <div className = 'brewery-container'>
                <div className = 'brews-header'>
                    <h2>Checkout some of these breweries!</h2>
                </div>
                <Grid columns='three' divided  className = 'brewery-cards'>
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
             <div className = 'get-brews'>
             <h1 className = 'get-brews-header'> Click To Get Your Brew On.</h1>
             </div>
         )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        breweries : state.breweries,
    }
}

export default connect(mapStateToProps, {})(BreweryList)
