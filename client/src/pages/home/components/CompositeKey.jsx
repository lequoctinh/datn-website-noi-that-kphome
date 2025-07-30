import React from "react";
import "./css/CompositeKey.css";

function CompositeKey({ image, title, description }) {
return (
    <div className="CompositeKey">
    <img src={image} alt={title} className="CompositeKey-image" />
    <div className="CompositeKey-overlay">
        <h3 className="CompositeKey-title">{title}</h3>
        <p className="CompositeKey-desc">{description}</p>
        <button className="CompositeKey-button">Xem thêm</button>
    </div>
    </div>
);
}

export default CompositeKey;
