import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // 検索キーワードを親コンポーネントに渡す
  };

  return (
    <header style={{ background: '#f5f5f5', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tomoki's Blog</h1>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '1rem', listStyle: 'none' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
      </nav>
      <input
        type="text"
        placeholder="Search articles..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          marginTop: '1rem',
          padding: '0.5rem',
          width: '80%',
          maxWidth: '400px',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
    </header>
  );
};

export default Header;
