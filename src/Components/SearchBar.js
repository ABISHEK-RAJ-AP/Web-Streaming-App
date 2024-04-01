// SearchBar.js
import React from 'react';
import micIcon from '../icons/mic.jpg';
import searchIcon from '../icons/search.jpg';

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar-container" style={{ display: 'flex', alignItems: 'center', background: '#333', borderRadius: '50px', padding: '5px 10px' }}>
      <input
        type="text"
        placeholder="Search videos..."
        onChange={(e) => handleSearch(e.target.value)}
        style={{ flex: 1, padding: '8px 10px', fontSize: '1rem', border: 'none', borderRadius: '50px', color: 'white', background: 'transparent' }}
      />
      <button style={{ background: 'transparent', border: 'none', padding: '0 5px' }}>
        <img src={searchIcon} alt="Search" style={{ height: '24px', width: '24px', cursor: 'pointer' }} />
      </button>
      <button style={{ background: 'transparent', border: 'none', padding: '0 5px' }}>
        <img src={micIcon} alt="Microphone" style={{ height: '24px', width: '24px', cursor: 'pointer' }} />
      </button>
    </div>
  );
};

export default SearchBar;
