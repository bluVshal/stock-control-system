import React from 'react';
import { Container, Divider, Table} from 'semantic-ui-react';

import './Inventory.css';

class Inventory extends React.Component{
    state={
        dataDisplay: []
    };

    async componentDidMount(){
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.setState({ dataDisplay: json }))
        .catch((err) => console.error(err)) ;
    }

    render(){
        return(
            <Container className="sales-container">
                <Divider horizontal>Inventory</Divider>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                            <Table.HeaderCell>Image</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                </Table>
            </Container>
        );
    }
}

export default Inventory;