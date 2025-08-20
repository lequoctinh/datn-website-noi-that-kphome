import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts"; 
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import ProductSmartLock from "./pages/products/ProductSmartLock";
import Contact from "./pages/contact/Contact";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ve-chung-toi" element={<About />} />
        <Route path="/khoa-cua-thong-minh" element={<ProductSmartLock/>} />
        <Route path="/lien-he" element={<Contact/>} />
      </Routes>
    </Layout>
  );  
}

export default App;
