import React from 'react';
import { Container, Divider, List } from 'semantic-ui-react';
import { Link} from 'react-router-dom';

import './QuickLinks.css';

const QuickLinks = () =>{
    return (
            <Container className="quickLinks-container">
                <Divider horizontal>Quick Links</Divider>
                    <List>
                        <Link to="/">Home</Link>
                        <Link to="/inventory">
                            <List.Item
                                icon="hand point right"
                                content="Inventory"
                            />
                        </Link>
                        <Link to="/sales">
                            <List.Item
                                icon="hand point right"
                                content="Sales"
                            />
                        </Link>
                        <Link to="/suppliers">
                            <List.Item
                                icon="hand point right"
                                content="Suppliers"
                            />
                        </Link>
                    </List>
            </Container>
    )
};

export default QuickLinks;