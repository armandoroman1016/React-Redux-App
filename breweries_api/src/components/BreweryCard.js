import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import { addToFavorites, removeFromFavorites } from '../actions'
import { connect } from 'react-redux';

const BreweryCard = props => {

    const { brewery } = props
    const { buttonText } = props

    return (
        <Card className = 'brewery-card'>
            <Card.Content>
                <Card.Header>{brewery.name}</Card.Header>
                <Card.Description>
                    <p>Brewery Type : {brewery.brewery_type}</p>
                    <p>Location : {brewery.city}, {brewery.state} {brewery.postal_code}</p>
                    <p>Street Adress : {brewery.street}</p>
                    <p>Phone Number : {brewery.phone}</p>
                </Card.Description>
            </Card.Content>
            <Card.Meta>
                <span className='date'> Visit {brewery.name} online <a>here</a>.</span>
            </Card.Meta>
            {buttonText === 'Add To Favorites'?
            <Button onClick = {() => props.addToFavorites(brewery)} className = 'card-button' style = {{backgroundColor : '#353755', color: 'rgba(252, 194, 90,1)'}}>{buttonText}</Button>:
            <Button onClick = {() => props.removeFromFavorites(brewery)} className = 'card-button' style = {{backgroundColor : 'rgba(252, 194, 90,1)', color: '#353755)'}}>{buttonText}</Button>
        }
        </Card>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addToFavorites, removeFromFavorites})(BreweryCard)