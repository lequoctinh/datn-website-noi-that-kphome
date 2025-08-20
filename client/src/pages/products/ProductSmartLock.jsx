import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./css/ProductSmartLock.css";

const logos = [
{ title: "Khóa cửa Ezviz", src: "/PartnerLogos/logo_ezviz.jpg", alt: "EZVIZ", link: "/ezviz" },
{ title: "Khóa vân tay Bosch", src: "/PartnerLogos/logo_bosh.jpg", alt: "Bosch", link: "/bosch" },
{ title: "Khóa cửa Hafele", src: "/PartnerLogos/logo_hafele.jpg", alt: "Hafele", link: "/hafele" },
{ title: "Khóa cửa Hubert", src: "/PartnerLogos/logo_hubert.jpg", alt: "Hubert", link: "/hubert" },
{ title: "Khóa cửa Hyundai", src: "/PartnerLogos/logo_hyundai.png", alt: "Hyundai", link: "/hyundai" },
{ title: "Khóa cửa Kaadas", src: "/PartnerLogos/logo_kaadas.jpg", alt: "Kaadas", link: "/kaadas" },
{ title: "Khóa cửa Kassler", src: "/PartnerLogos/logo_kassler.jpg", alt: "Kassler", link: "/kassler" },
];
    
function ProductSmartLock() {
return (
    <div className="Container-ProductSmartLock">
        <div className="ProductSmartLock-BannerPage">
            <img src="/banner-page/banner-pages.png" alt="" />
        </div>
        <div className="ProductSmartLock-Content">
            <nav
            className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            aria-label="Breadcrumb"
            >
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

    </div>
);
}

export default ProductSmartLock;
