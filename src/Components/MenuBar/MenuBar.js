import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

import './MenuBar.css';

const MenuBar = () => {
    return (
    <Container className="menu-container">
        <Menu className="menu-item-container">
            <Menu.Item
                name='editorials'
            >
                <p className="menu-item">Editorials</p>
            </Menu.Item>

            <Menu.Item
                name='reviews'
            >
                 <p className="menu-item">Reviews</p>
            </Menu.Item>

            <Menu.Item
                name='upcomingEvents'
            >
                <p className="menu-item">Upcoming Events</p>
            </Menu.Item>
        </Menu>
    </Container>);
};

export default MenuBar;