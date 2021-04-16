import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Header, Icon, Image, Segment } from 'semantic-ui-react';

const imageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    right: '5%',
    width: 'auto',
    height: 'auto',
    color: 'white'
}

function NotFound() {
    return (
        <Segment placeholder >
                <Image src={'/assets/not_stonks.jpg'} fluid />
                <Segment color='red' style={imageTextStyle} basic >
                    <Header
                        size='huge' style={{color: 'white'}} >
                            OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko boingo! The code monkeys are working VEWY HAWD to fix this! UwW.
                    </Header>
                </Segment>
            <Segment.Inline >
                <Button as={Link} to='/activities' primary>
                    Return to activities page.
                </Button>
            </Segment.Inline>
        </Segment>
    )
}

export default NotFound;