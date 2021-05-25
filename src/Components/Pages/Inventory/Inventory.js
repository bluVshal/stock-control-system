import React from 'react';
import { Container, Divider, Segment, Table} from 'semantic-ui-react';

import './Inventory.css';
import DisplayTable from '../../AdditionalComponents/DisplayTable/DisplayTable';
import SearchBar from '../../AdditionalComponents/SearchBar/SearchBar';

class Inventory extends React.Component{
    state={
        isLoading: false,
        loading: false,
        searchTerm: "",
        searchLoading: false,
        searchResults: [],
        products: []
    };


    async componentDidMount(){
        await fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>this.setState({ products: json }))
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
        const searchedProducts = [...this.state.products];
        const regex = new RegExp(this.state.searchTerm, "gi");
        const searchResults = searchedProducts.reduce((acc, product) => {
        if (
            (product.content && product.content.match(regex)) ||
            product.title.match(regex)
        ) {
            acc.push(product);
        }
        return acc;
        }, []);

        this.setState({ searchResults });
        setTimeout(() => this.setState({ searchLoading: false }), 1000);
    };

    displayProducts = prodsToDisplay => 
        prodsToDisplay.map(prod => (
            <DisplayTable 
                prod={prod}
            />
        ));

    componentWillUnmount() {
        this.setState({ 
            products: [],
            searchTerm: '',
            searchResults: [],
            searchLoading: false,
            isLoading: false
        }); //cleaning up all fetch data
    }

    render(){
        const { products, searchTerm, searchResults, searchLoading } = this.state;
        return(
            <Container className="sales-container">
                <Divider horizontal>Inventory</Divider>
                <Segment>
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

                        {searchTerm 
                        ? this.displayProducts(searchResults) 
                        : this.displayProducts(products)}
                    </Table>
                </Segment>
            </Container>
        );
    }
}

export default Inventory;