import React from "react";
import HeroSection from "./components/HeroSection";
import IntroBrandValue from "./components/IntroBrandValue";
import SmartLockCatalog from "./components/SmartLockCatalog";

function Home() {
return (
    <div className="Container-home">
        <HeroSection />
        <IntroBrandValue />
        <SmartLockCatalog/>
        
    </div>
);
}
    
export default Home;
