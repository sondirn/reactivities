import React from 'react';
import { observer } from 'mobx-react-lite';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <Container style={{ marginTop: '7em' }}>
            <h1>Home Page</h1>
            <h3>Go To <Link to='/activities'>Activities</Link></h3>
            <h3>Go To <Link to='/createActivity'>Create Activity</Link></h3>
        </Container>
    )
}

export default observer(HomePage);