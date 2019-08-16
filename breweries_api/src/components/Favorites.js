import React from 'react'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import BreweryCard from './BreweryCard'

const Favorites = props => {
    console.log(props)
    return (
        <div>
            {props.favorites.length ? (
                <Grid columns='three' divided >
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
                    'Hello'
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