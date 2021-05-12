import React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link} from 'react-router-dom';

import './MenuBar.css';

const MenuBar = () => {
    return (
    <Container className="menu-container">
        <Menu className="menu-item-container">
        <Link to="/">
                <Menu.Item
                    name='home'
                >
                    <p className="menu-item">Main</p>
                </Menu.Item>
            </Link>
            <Link to="/inventory">
                <Menu.Item
                    name='inventory'
                >
                    <p className="menu-item">Inventory</p>
                </Menu.Item>
            </Link>
            <Link to="/sales">
                <Menu.Item
                    name='sales'
                >
                    <p className="menu-item">Sales</p>
                </Menu.Item>
            </Link>
            <Link to="/suppliers">
                <Menu.Item
                    name='suppliers'
                >
                    <p className="menu-item">Suppliers</p>
                </Menu.Item>
            </Link>
        </Menu>
    </Container>);
};

export default MenuBar;