import React from "react";
import IndexPage from "./components/pages/IndexPage";
import RestPage from "./components/pages/RestPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/rest" element={<RestPage />} />
      </Routes>
    </Router>
  );
}
