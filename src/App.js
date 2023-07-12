import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import RestPage from "./pages/RestPage";
import EDAPage from "./pages/EDAPage";
import HomePage from "./pages/HomePage";
import AAPPage from "./pages/AAPPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />}>
          <Route path="rest" element={<RestPage />} />
          <Route path="eda" element={<EDAPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="aap" element={<AAPPage />} />
          <Route index element={<Navigate to="home" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
