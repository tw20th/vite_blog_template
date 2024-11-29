import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CardGrid from './components/CardGrid';
import About from './pages/About';
import Contact from './pages/Contact';
import Pages from './pages/Pages';
import ArticleDetail from './pages/ArticleDetail'; // 詳細ページをインポート

import './app.css';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <Router>
      <Header onSearch={handleSearch} />
      <Routes>
        <Route path="/" element={<CardGrid searchQuery={searchQuery} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/articles/:id" element={<ArticleDetail />} /> {/* 詳細ページのルート */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
