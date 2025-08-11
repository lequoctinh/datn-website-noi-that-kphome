import React from "react";
import './css/ProductCatalog.css';

function ProductCatalog() {
    return (
        <div className="Container-ProductCatalog flex flex-col items-center gap-6">
            <div className="ProductCatalog-Content text-center">
                <h2 className="font-bold text-xl">Danh mục sản phẩm</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl">
                <div className="ProductCatalog-banner flex justify-center">
                    <img src="/categories/smart-door.png" alt="" />
                    <p>Khóa cửa thông minh</p>
                </div>
                <div className="ProductCatalog-banner flex justify-center">
                    <img src="/categories/door.png" alt="" />
                    <p>Cửa nhựa composite</p>
                </div>
                <div className="ProductCatalog-banner flex justify-center">
                    <img src="/categories/cctv.png" alt="" />
                    <p>Camera giám sát</p>
                </div>
                <div className="ProductCatalog-banner flex justify-center">
                    <img src="/categories/setting.png" alt="" />
                    <p>Phụ kiện</p>
                </div>
            </div>
        </div>
    );
}

export default ProductCatalog;
