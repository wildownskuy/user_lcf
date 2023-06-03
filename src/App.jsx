import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Review from "./pages/Review";
import Produk from "./pages/Produk";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/review" element={<Review />} />
        <Route path="/artikel/:title/:id" element={<Produk />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </Router>
  );
};

export default App;
