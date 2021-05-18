import React, { Component } from 'react';
import { Container, Menu } from 'semantic-ui-react';
import { Link} from 'react-router-dom';

import './MenuBar.css';

class MenuBar extends Component {
    state = {
        activeItem: 'home'
    };

    handleItemClick = (e, {name}) => this.setState({ activeItem: name });

    render(){
        const {activeItem} = this.state;

        return (
        <Container className="menu-container">
            <Menu className="menu-item-container">
            <Link to="/">
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick= {this.handleItemClick}
                    >
                        <p className="menu-item-text">Main</p>
                    </Menu.Item>
                </Link>
                <Link to="/inventory">
                    <Menu.Item
                        name='inventory'
                        active={activeItem === 'inventory'}
                        onClick= {this.handleItemClick}
                    >
                        <p className="menu-item-text">Inventory</p>
                    </Menu.Item>
                </Link>
                <Link to="/sales">
                    <Menu.Item
                        name='sales'
                        active={activeItem === 'sales'}
                        onClick= {this.handleItemClick}
                    >
                        <p className="menu-item-text">Sales</p>
                    </Menu.Item>
                </Link>
                <Link to="/suppliers">
                    <Menu.Item
                        name='suppliers'
                        active={activeItem === 'suppliers'}
                        onClick= {this.handleItemClick}
                    >
                        <p className="menu-item-text">Suppliers</p>
                    </Menu.Item>
                </Link>
            </Menu>
        </Container>);
    }
};

export default MenuBar;