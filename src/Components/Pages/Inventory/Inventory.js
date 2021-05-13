import React from 'react';
import { Container, Divider, Header, Image, Table} from 'semantic-ui-react';

import './Inventory.css';
import SearchBar from '../../AdditionalComponents/SearchBar/SearchBar';

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
                <SearchBar/>
                <Table basic='very' celled collapsing>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Category</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    {this.state.dataDisplay.map(datDis => (
                        <Table.Row key={datDis.id}>
                                <Table.Cell>
                                    {datDis.id}
                                </Table.Cell>
                                <Table.Cell>
                                    <Header as='h4' image>
                                        <Image
                                            className="product-image"
                                            src={datDis.image}
                                        />
                                        <Header.Content>
                                            {datDis.title}
                                        </Header.Content>
                                    </Header>
                                </Table.Cell>
                                <Table.Cell>
                                    {datDis.price}
                                </Table.Cell>
                                <Table.Cell>
                                    {datDis.description}
                                </Table.Cell>
                                <Table.Cell>
                                    {datDis.category}
                                </Table.Cell>
                        </Table.Row>
                    ))}

                    </Table.Body>

                </Table>
            </Container>
        );
    }
}

export default Inventory;