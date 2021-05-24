import React from 'react';
import { Header, Input, Segment } from 'semantic-ui-react';

import './SearchBar.css';

class SearchBar extends React.Component {
    render(){
        const {
            handleSearchChange, 
            searchLoading
        } = this.props;


        return (
                <Segment clearing>
                    <Header floated="right">
                    <Input
                        onChange={handleSearchChange}
                        loading={searchLoading}
                        size="mini"
                        icon="search"
                        name="searchTerm"
                        placeholder="Search Product Name"
                    />
                    </Header>
                </Segment>
        )
    }
}

export default SearchBar;