import React from "react";
import "./css/TopsellingProducts.css";
import { Link } from "react-router-dom";
import AnimationWrapper from "./SharedEffect/AnimationWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// dữ liệu sản phẩm chọn từ SmartLockPage
const topSmartLocks = [
{
    img: "/smartlock/boshms01.jpg",
    title: "Khóa cửa điện tử Bosch FU6 Plus",
    price: "9.300.000 đ",
    old: "14.500.900 đ",
    to: "/khoa-cua-huyndai",
},
{
    img: "/smartlock/huyndaims02.png",
    title: "Khóa cửa gỗ điện tử Hyundai HY-SLA808F BLACK",
    price: "8.490.000 đ",
    old: "9.990.000 đ",
    to: "/khoa-cua-huyndai",
},
{
    img: "/smartlock/hafelems02.png",
    title: "Khóa điện tử DL6000 Hafele 912.20.581",
    price: "4.300.000 đ",
    old: "5.764.000 đ",
    to: "/khoa-cua-huyndai",
},
{
    img: "/smartlock/boshms04.jpg",
    title: "Khóa cửa điện tử BOSCH FU8 PLUS",
    price: "10.100.000 đ",
    old: "16.500.900 đ",
    to: "/khoa-cua-huyndai",
},
];

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
            <div className={`TSP-card ${it.emphasis ? "is-emphasis" : ""}`}>
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

        <div className="TSP-Product grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {topSmartLocks.map((p, i) => (
            <AnimationWrapper key={p.title} type="fade-up" delay={i * 150}>
            <div className="SLP-card">
                <div className="SLP-thumb">
                <Link>
                    <img src={p.img} alt={p.title} loading="lazy" />
                </Link>
                </div>
                <div className="SLP-info">
                <Link to={p.to} className="SLP-title">
                    {p.title}
                </Link>
                <div className="SLP-prices">
                    <span className="SLP-price-old">{p.old}</span>
                    <span className="SLP-price">{p.price}</span>
                </div>
                <div className="SLP-actions">
                    <button type="button" className="SLP-compare">
                    So sánh
                    </button>
                    <button
                    type="button"
                    className="SLP-cart"
                    aria-label="Thêm vào giỏ"
                    >
                    <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                </div>
                </div>
            </div>
            </AnimationWrapper>
        ))}
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
