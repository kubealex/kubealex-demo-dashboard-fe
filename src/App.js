import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RestPage from './pages/RestPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/rest" element={<RestPage />} />
      </Routes>
    </Router>
  );
};

export default App;