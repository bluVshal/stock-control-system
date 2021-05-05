import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

import './MenuBar.css';

const MenuBar = () => {
    return (
    <Container className="menu-container">
        <Menu className="menu-item-container">
            <Menu.Item
                name='inventory'
            >
                <p className="menu-item">Inventory</p>
            </Menu.Item>

            <Menu.Item
                name='sales'
            >
                 <p className="menu-item">Sales</p>
            </Menu.Item>

            <Menu.Item
                name='suppliers'
            >
                <p className="menu-item">Suppliers</p>
            </Menu.Item>
        </Menu>
    </Container>);
};

export default MenuBar;