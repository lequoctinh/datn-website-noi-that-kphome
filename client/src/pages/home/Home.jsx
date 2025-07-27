import React from "react";
import HeroSection from "./components/HeroSection";
import IntroBrandValue from "./components/IntroBrandValue";
import ServiceGrid from "./components/ServiceGrid";
function Home() {
return (
    <div className="Container-home">
        <HeroSection />
        <IntroBrandValue />
        <ServiceGrid/>
    </div>
);
}
    
export default Home;
