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
                        content="Inventory"
                    />
                    <List.Item
                        as='a'
                        icon="hand point right"
                        content="Sales"
                    />
                    <List.Item
                        as='a'
                        icon="hand point right"
                        content="Suppliers"
                    />
                </List>
            </Container>
    )
};

export default QuickLinks;