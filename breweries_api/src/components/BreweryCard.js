import React from 'react';
import { Card, Button } from 'semantic-ui-react'

const BreweryCard = props => {

    const { brewery } = props

    console.log(brewery)

    return (
        <Card>
            <Card.Content>
                <Card.Header>{brewery.name}</Card.Header>
                <Card.Description>
                    <p>Brewery Type : {brewery.type}</p>
                    <p>Location : {brewery.city}, {brewery.state} {brewery.postal_code}</p>
                    <p>Street Adress : {brewery.street}</p>
                    <p>Phone : {brewery.phone}</p>
                </Card.Description>
            </Card.Content>
            <Card.Meta>
                <span className='date'> Visit {brewery.name} online <a href={`#${brewery.website_url}`}>here</a>.</span>
            </Card.Meta>
            <Button>Add To Favorites</Button>
        </Card>
    )
}

export default BreweryCard