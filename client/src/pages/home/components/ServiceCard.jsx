import React from "react";
import "./css/ServiceCard.css";

function ServiceCard({ image, title, description }) {
return (
    <div className="ServiceCard">
    <img src={image} alt={title} className="ServiceCard-image" />
    <div className="ServiceCard-overlay">
        <h3 className="ServiceCard-title">{title}</h3>
        <p className="ServiceCard-desc">{description}</p>
        <button className="ServiceCard-button">Xem thêm</button>
    </div>
    </div>
);
}

export default ServiceCard;
