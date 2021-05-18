import React from 'react';
import { Container, Divider, Header, Image, Table} from 'semantic-ui-react';

import './Inventory.css';
import SearchBar from '../../AdditionalComponents/SearchBar/SearchBar';

class Inventory extends React.Component{
    state={
        dataDisplay: [],
        loading: false,
        searchTerm: "",
        searchLoading: false,
        searchResults: [],
        products: []
    };


    async componentDidMount(){
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.setState({ dataDisplay: json }))
        .catch((err) => console.error(err)) ;
    }

    handleSearchChange = event => {
        this.setState(
        {
            searchTerm: event.target.value,
            searchLoading: true
        },
        () => this.handleSearchMessages()
        );
    };

    handleSearchMessages = () => {
        const channelMessages = [...this.state.products];
        const regex = new RegExp(this.state.searchTerm, "gi");
        const searchResults = channelMessages.reduce((acc, message) => {
        if (
            (message.content && message.content.match(regex)) ||
            message.user.name.match(regex)
        ) {
            acc.push(message);
        }
        return acc;
        }, []);

        this.setState({ searchResults });
        setTimeout(() => this.setState({ searchLoading: false }), 1000);
    };

    componentWillUnmount() {
        this.setState({ dataDisplay: []}); //cleaning up all fetch data
    }

    render(){
        const { searchTerm, searchResults, searchLoading } = this.state;

        return(
            <Container className="sales-container">
                <Divider horizontal>Inventory</Divider>
                <SearchBar
                    handleSearchChange={this.handleSearchChange}
                    searchLoading={searchLoading}
                />
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