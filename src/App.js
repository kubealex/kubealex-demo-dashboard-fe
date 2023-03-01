import React from 'react';
import IndexPage from './components/IndexPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <Router>
    <Routes>
      <Route path='/' element={<IndexPage/>} />
    </Routes>
    </Router>
)
}