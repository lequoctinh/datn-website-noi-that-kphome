import React from "react";
import HeroSection from "./components/HeroSection";
import IntroBrandValue from "./components/IntroBrandValue";
import SmartLock from "./components/SmartLock";
import CompositePlasticDoor from "./components/CompositePlasticDoor";
function Home() {
return (
    <div className="Container-home">
        <HeroSection />
        <IntroBrandValue />
        <SmartLock/>
        <CompositePlasticDoor/>
        
    </div>
);
}
    
export default Home;
