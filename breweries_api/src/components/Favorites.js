import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import BreweryCard from './BreweryCard'
import { Link } from 'react-router-dom'

const Favorites = props => {
    return (
        <div className = 'favorites no-favorites'>
            {props.favorites.length ? (
                <Grid columns='two' divided >
                    <Grid.Row>
                {props.favorites.map( favorite => {
                    return( 
                        <Grid.Column className = 'brewery' key = {favorite.id} style = {{boxShadow: 'none'}}>
                            <BreweryCard brewery = {favorite} buttonText = {'Remove From Favorites'}/>
                        </Grid.Column>
                    )
                })}
                </Grid.Row>
                </Grid>
                ):(
                    (
                        <h1 className = 'no-favorites-message'>It appears you don't currently have any breweries in your favorites. Checkout the <Link to = '/breweries'>breweries</Link> to get started.</h1>
                    )
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        favorites : state.favorites
    }
}

export default connect(mapStateToProps,{})(Favorites)