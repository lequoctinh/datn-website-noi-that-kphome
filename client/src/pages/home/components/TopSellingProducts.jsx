import React from "react";
import "./css/TopsellingProducts.css";
import { Link } from "react-router-dom";
import AnimationWrapper from "./SharedEffect/AnimationWrapper";

const items = [
{
    to: "/khuyen-mai",
    title: "Sản phẩm giá sốc",
    subtitle: "Giá luôn rẻ nhất",
    icon: "/collection/flame.png",
    emphasis: true,
},
{
    to: "/camera",
    title: "Camera ưu đãi",
    subtitle: "Chuẩn hàng chính hãng",
    icon: "/collection/cctv.png",
},
{
    to: "/khoa-thong-minh",
    title: "Khóa vân tay giảm sốc",
    subtitle: "TOP 1 bán chạy 2025",
    icon: "/collection/knob.png",
},
{
    to: "/cua-nhua-composite",
    title: "Cửa nẹp kim loại",
    subtitle: "Bền - đẹp - chống nước",
    icon: "/collection/open-door.png",
},
];

function TopSellingProducts() {
return (
    <section className="Container-TopSellingProducts px-4 py-8">
    <div className="TopSellingProducts-Content max-w-6xl mx-auto">        
        <AnimationWrapper type="fade" delay={0}>
        <div className="TopSellingProducts-Content_Title text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">
            Top sản phẩm bán chạy
            </h2>
        </div>
        </AnimationWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
            <AnimationWrapper key={i} type="fade-up" delay={i * 120}>
            <div
                className={`TSP-card ${it.emphasis ? "is-emphasis" : ""}`}
            >
                <Link
                to={it.to}
                className="TSP-link flex items-center gap-3"
                aria-label={it.title}
                >
                <div className="TSP-icon flex items-center justify-center rounded-full">
                    <img
                    src={it.icon}
                    alt=""
                    className="w-7 h-7 object-contain"
                    loading="lazy"
                    />
                </div>
                <div className="TSP-text flex-1">
                    <div className="TSP-title font-semibold">{it.title}</div>
                    <div className="TSP-subtitle text-sm">{it.subtitle}</div>
                </div>
                </Link>
            </div>
            </AnimationWrapper>
        ))}
        </div>

        <div>
        <span>sau nay get api tai day</span>
        </div>
        <AnimationWrapper type="zoom-in" delay={100}>
        <div className="text-center mt-8">
            <Link to="/san-pham-ban-chay" className="TSP-more-btn">
            Xem thêm &rarr;
            </Link>
        </div>
        </AnimationWrapper>
    </div>
    </section>
);
}

export default TopSellingProducts;
