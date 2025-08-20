// src/pages/products/ProductSmartLock.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./css/ProductSmartLock.css";



const logos = [
{ title: "Khóa cửa Ezviz", src: "/homepage/PartnerLogos/logo_ezviz.jpg", alt: "EZVIZ", link: "/ezviz" },
{ title: "Khóa vân tay Bosch", src: "/homepage/PartnerLogos/logo_bosh.jpg", alt: "Bosch", link: "/bosch" },
{ title: "Khóa cửa Hafele", src: "/homepage/PartnerLogos/logo_hafele.jpg", alt: "Hafele", link: "/hafele" },
{ title: "Khóa cửa Hubert", src: "/homepage/PartnerLogos/logo_hubert.jpg", alt: "Hubert", link: "/hubert" },
{ title: "Khóa cửa Hyundai", src: "/homepage/PartnerLogos/logo_hyundai.png", alt: "Hyundai", link: "/hyundai" },
{ title: "Khóa cửa Kaadas", src: "/homepage/PartnerLogos/logo_kaadas.jpg", alt: "Kaadas", link: "/kaadas" },
{ title: "Khóa cửa Kassler", src: "/homepage/PartnerLogos/logo_kassler.jpg", alt: "Kassler", link: "/kassler" },
];

const products = [
{ img: "/productpage/ezviz/khoa-cua-ezviz-ms01.jpg", title: "Khóa Cửa Vân Tay Ezviz LT70", old: "5.500.000 đ", price: "3.490.000 đ", to: "/xem-chi-tiet" },
{ img: "/productpage/ezviz/khoa-cua-ezviz-ms02.jpeg", title: "Khóa Thông Minh Ezviz DL06", old: "4.500.000 đ", price: "2.490.000 đ", to: "/xem-chi-tiet" },
{ img: "/productpage/ezviz/khoa-cua-ezviz-ms03.jpeg", title: "Khóa Cửa Vân Tay 2 Mặt Ezviz DL06 Pro", old: "6.500.000 đ", price: "4.490.000 đ", to: "/xem-chi-tiet" },
{ img: "/productpage/ezviz/khoa-cua-ezviz-ms04.png", title: "Khóa Cửa Thông Minh Ezviz DL04 Pro", old: "3.500.000 đ", price: "2.490.000 đ", to: "/xem-chi-tiet" },
{ img: "/productpage/ezviz/khoa-cua-ezviz-ms05.png", title: "Khóa Cửa Vân Tay Ezviz DL03 Pro Ưu Đãi 60%", old: "3.400.000 đ", price: "2.390.000 đ", to: "/xem-chi-tiet" }
];

function ProductSmartLock() {
return (
    <div className="Container-ProductSmartLock">
        <div className="ProductSmartLock-BannerPage">
            <img src="/productpage/banner-page/banner-pages.png" alt="" />
        </div>

        <div className="ProductSmartLock-Content">
            <nav className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base" aria-label="Breadcrumb">
                <Link to="/" className="PSL-crumb">
                    <span>Trang Chủ</span>
                </Link>
                <FontAwesomeIcon icon={faAngleRight} className="PSL-sep" />
                <Link to="/khoa-cua-thong-minh" className="PSL-crumb PSL-crumb-active">
                    <span>Khóa cửa thông minh</span>
                </Link>
            </nav>
        </div>

        <div className="ProductSmartLock-cate-wrapper">
            <div className="ProductSmartLock-cate">
            {logos.map((l, i) => (
                <Link key={i} to={l.link} className="PSL-logoItem">
                <div className="PSL-logoBox">
                    <img src={l.src} alt={l.alt} />
                </div>
                <p className="PSL-logoTitle">{l.title}</p>
                </Link>
            ))}
            </div>
        </div>
        <div className="ProductSmartLock-ListSP">
            <div className="ProductSmartLock-ListSP_Title">
                <div>
                    <h2>Khóa cửa Ezviz</h2>
                </div>
                <div>
                    <Link to="/xem-tat-ca">
                    <span>Xem tất cả</span>
                    </Link>
                </div>  
            </div>
            <div className="ProductSmartLock-ListSP_Products grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-6">
            {products.map((p) => (
                <div key={p.title} className="SLP-card">
                <div className="SLP-thumb">
                    <img src={p.img} alt={p.title} loading="lazy" />
                </div>

                <div className="SLP-info">
                    <Link to={p.to} className="SLP-title">{p.title}</Link>
                    <div className="SLP-prices">
                    <span className="SLP-price">{p.price}</span>
                    {p.old && <span className="SLP-price-old">{p.old}</span>}
                    </div>

                    <div className="SLP-actions">
                    <button type="button" className="SLP-compare">So sánh</button>
                    <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>

        </div>
    </div>
);
}

export default ProductSmartLock;
