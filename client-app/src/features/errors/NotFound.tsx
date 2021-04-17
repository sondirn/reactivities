import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';

function NotFound() {
    return (
        <Segment placeholder>
            <Header color='black' icon>
                <Icon name='search' />
                Oopse Woopsie! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys at our 
                headquarters are working VEWY HAWD to fix this!
            </Header>
            <Segment.Inline>
                <Button color='black' primary as={Link} to='/activities' >Go To Home</Button>
            </Segment.Inline>
        </Segment>
    )
}

export default NotFound;