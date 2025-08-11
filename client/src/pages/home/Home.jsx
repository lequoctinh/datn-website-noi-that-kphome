import React from "react";
import './css/Home.css'
import HeroSection from "./components/HeroSection";
import IntroBrandValue from "./components/IntroBrandValue";
import ProductCatalog from "./components/ProductCatalog";
import TopSellingProducts from "./components/TopSellingProducts";
function Home() {
return (
    <div className="Container-home">
        <div className="Container-home_banner">
            <HeroSection />
        </div>
        <div className="Container-home_main">
            <IntroBrandValue />
            <ProductCatalog/>
            <TopSellingProducts/>
        </div>        
    </div>
);
}
    
export default Home;
