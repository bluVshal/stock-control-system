import React from 'react';

import './SearchBar.css';

const SearchBar = () => {
    return (
                <div className="search-container">
                    <span
                        className="search-span"
                    >
                    </span>
                    <input
                        className="search-input"
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                        placeholder='Search'
                    />
                </div>
    )
};

export default SearchBar;