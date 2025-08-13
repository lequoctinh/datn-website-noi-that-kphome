import React from "react";
import { Link } from "react-router-dom";
import "./css/ProductCatalog.css";

function ProductCatalog() {
return (
    <div className="Container-ProductCatalog flex flex-col items-center gap-6">
        <div className="ProductCatalog-Content text-center">
            <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
            <Link
                to="/khoa-cua-thong-minh"
                className="ProductCatalog-card"
                aria-label="Xem danh mục Khóa cửa thông minh"
                >
                <div className="thumb">
                    <img src="/categories/smart-door.png" alt="Khóa cửa thông minh" />
                </div>
                <p className="title">Khóa cửa thông minh</p>
            </Link>

            <Link
                to="/cua-nhua-composite"
                className="ProductCatalog-card"
                aria-label="Xem danh mục Cửa nhựa composite"
                >
                <div className="thumb">
                    <img src="/categories/door.png" alt="Cửa nhựa composite" />
                </div>
                <p className="title">Cửa nhựa composite</p>
            </Link>

            <Link
                to="/camera-giam-sat"
                className="ProductCatalog-card"
                aria-label="Xem danh mục Camera giám sát"
                >
                <div className="thumb">
                    <img src="/categories/cctv.png" alt="Camera giám sát" />
                </div>
                <p className="title">Camera giám sát</p>
            </Link>

            <Link
                to="/phu-kien"
                className="ProductCatalog-card"
                aria-label="Xem danh mục Phụ kiện"
                >
                <div className="thumb">
                    <img src="/categories/setting.png" alt="Phụ kiện" />
                </div>
                <p className="title">Phụ kiện</p>
            </Link>
        </div>
    </div>
);
}

export default ProductCatalog;
