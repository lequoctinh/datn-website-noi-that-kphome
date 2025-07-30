import React from "react";
import "./css/SmartKey.css";

function SmartKey({ image, title, description }) {
return (
    <div className="SmartKey">
    <img src={image} alt={title} className="SmartKey-image" />
    <div className="SmartKey-overlay">
        <h3 className="SmartKey-title">{title}</h3>
        <p className="SmartKey-desc">{description}</p>
        <button className="SmartKey-button">Xem thêm</button>
    </div>
    </div>
);
}

export default SmartKey;
