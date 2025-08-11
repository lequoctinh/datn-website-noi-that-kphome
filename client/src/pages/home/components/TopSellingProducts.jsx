import React from "react";
import "./css/TopsellingProducts.css";
import { Link } from "react-router-dom";

function TopSellingProducts() {
return (
    <div className="Container-TopSellingProducts px-4 py-8">
        <div className="TopSellingProducts-Content max-w-6xl mx-auto">
            <div className="TopSellingProducts-Content_Title text-center mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold uppercase">
                    Top sản phẩm bán chạy
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="TSP-card is-emphasis">
                    <Link to="/khuyen-mai" className="TSP-link flex items-center gap-3">
                    <div className="TSP-icon flex items-center justify-center rounded-full">
                        <img src="/collection/flame.png" alt="Giá sốc" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="TSP-text flex-1">
                        <div className="TSP-title font-semibold">Sản phẩm giá sốc</div>
                        <div className="TSP-subtitle text-sm">Giá luôn rẻ nhất</div>
                    </div>
                    </Link>
                </div>
                <div className="TSP-card">
                    <Link to="/camera" className="TSP-link flex items-center gap-3">
                    <div className="TSP-icon flex items-center justify-center rounded-full">
                        <img src="/collection/cctv.png" alt="Camera ưu đãi" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="TSP-text flex-1">
                        <div className="TSP-title font-semibold">Camera ưu đãi</div>
                        <div className="TSP-subtitle text-sm">Chuẩn hàng chính hãng</div>
                    </div>
                    </Link>
                </div>
                <div className="TSP-card">
                    <Link to="/khoa-thong-minh" className="TSP-link flex items-center gap-3">
                    <div className="TSP-icon flex items-center justify-center rounded-full">
                        <img src="/collection/knob.png" alt="Khóa vân tay" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="TSP-text flex-1">
                        <div className="TSP-title font-semibold">Khóa vân tay giảm sốc</div>
                        <div className="TSP-subtitle text-sm">TOP 1 bán chạy 2025</div>
                    </div>
                    </Link>
                </div>
                <div className="TSP-card">
                    <Link to="/cua-nhua-composite" className="TSP-link flex items-center gap-3">
                    <div className="TSP-icon flex items-center justify-center rounded-full">
                        <img src="/collection/open-door.png" alt="cửa nhựa composite" className="w-7 h-7 object-contain" />
                    </div>
                    <div className="TSP-text flex-1">
                        <div className="TSP-title font-semibold">Cửa nẹp kim loại</div>
                        <div className="TSP-subtitle text-sm">Bền - đẹp - chống nước</div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);
}

export default TopSellingProducts;
