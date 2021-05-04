import React from 'react';
import { Container, Divider, List } from 'semantic-ui-react';

import './QuickLinks.css';

const QuickLinks = () =>{
    return (
            <Container className="quickLinks-container">
                <Divider horizontal>Quick Links</Divider>
                <List>
                    <List.Item
                        as='a'
                        icon="hand point right"
                        content="Editorials"
                    />
                    <List.Item
                        as='a'
                        icon="hand point right"
                        content="Reviews"
                    />
                    <List.Item
                        as='a'
                        icon="hand point right"
                        content="Upcoming Events"
                    />
                </List>
            </Container>
    )
};

export default QuickLinks;