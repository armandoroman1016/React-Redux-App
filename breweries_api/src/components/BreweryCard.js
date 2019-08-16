import React from 'react';
import { Card, Button } from 'semantic-ui-react'
import { addToFavorites } from '../actions'
import { connect } from 'react-redux';

const BreweryCard = props => {

    const { brewery } = props
    
    const { buttonText } = props

    return (
        <Card>
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
                <span className='date'> Visit {brewery.name} online <a href={`#${brewery.website_url}`}>here</a>.</span>
            </Card.Meta>
            <Button onClick = {() => props.addToFavorites(brewery)}>{buttonText}</Button>
        </Card>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {addToFavorites})(BreweryCard)