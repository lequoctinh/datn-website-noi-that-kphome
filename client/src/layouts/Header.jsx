import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faAngleDown,
faMagnifyingGlass,
faUser,
faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";

import './css/Header.css';

function Header() {
const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

return (
    <div className="ConTaiNer-Header w-full fixed top-0 left-0 z-50">
    <div className="header-navbar max-w-[1200px] mx-auto px-4 py-3">
        {isTablet ? (
        <div className="header-navbar_top flex justify-between items-center mb-2">
            <div className="header-navbar_logo">
            <img src="/SecureHome.png" alt="Logo" className="h-14" />
            </div>
            <div className="header-navbar_item flex items-center gap-4 text-lg">
            <div className="item-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className="item-users"><FontAwesomeIcon icon={faUser} /></div>
            <div className="item-cart"><FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </div>
        ) : (
        <>
            <div className="header-navbar_logo">
            <img src="/SecureHome.png" alt="Logo" className="h-14" />
            </div>
            <div className="header-navbar_menu">
            <ul className="list-menu flex space-x-6 items-center text-[15px] font-medium">
                {renderMenu()}
            </ul>
            </div>
            <div className="header-navbar_item flex items-center gap-4 text-lg">
            <div className="item-search"><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            <div className="item-users"><FontAwesomeIcon icon={faUser} /></div>
            <div className="item-cart"><FontAwesomeIcon icon={faShoppingCart} /></div>
            </div>
        </>
        )}

        {isTablet && (
        <div className="header-navbar_menu">
            <ul className="list-menu flex flex-wrap justify-center gap-4 items-center text-[14px] font-medium">
            {renderMenu()}
            </ul>
        </div>
        )}
    </div>
    </div>
);
}
const renderMenu = () => (
    <>
        <li><Link to="/ve-chung-toi">Về chúng tôi</Link></li>
        <li className="relative group">
            <Link to="#">Khóa cửa thông minh <FontAwesomeIcon icon={faAngleDown} /></Link>
        <ul className="list-menu_secure absolute hidden group-hover:block">
            <li><Link to="/khoa-van-tay-bosh">Khóa vân tay BOSH</Link></li>
            <li><Link to="/khoa-cua-huyndai">Khóa cửa HUYNDAI</Link></li>
            <li><Link to="/khoa-cua-hafele">Khóa cửa HAFELE</Link></li>
            <li><Link to="/khoa-cua-hubert">Khóa cửa HUBERT</Link></li>
            <li><Link to="/khoa-cua-ezviz">Khóa cửa EZVIZ</Link></li>
            <li><Link to="/khoa-cua-kassler">Khóa cửa KASSLER</Link></li>
        </ul>
        </li>
        <li className="relative group">
            <Link to="#">Cửa nhựa Composite <FontAwesomeIcon icon={faAngleDown} /></Link>
            <ul className="list-menu_secure absolute hidden group-hover:block">
                <li><Link to="/cua-phang">Cửa phẳng</Link></li>
                <li><Link to="/cua-nep-kim-loai">Cửa nẹp kim loại</Link></li>
                <li><Link to="/cua-o-kinh">Cửa ô kính</Link></li>
                <li><Link to="/cua-chi-noi">Cửa chỉ nổi</Link></li>
                <li><Link to="/cua-hut-huynh">Cửa hút huỳnh</Link></li>
                <li><Link to="/cua-vom">Cửa vòm</Link></li>
            </ul>
        </li>
        <li className="relative group">
            <Link to="#">Camera giám sát <FontAwesomeIcon icon={faAngleDown} /></Link>
            <ul className="list-menu_secure absolute hidden group-hover:block">
                <li><Link to="/camera-wifi-imou">Camera Wifi Imou</Link></li>
                <li><Link to="/camera-wifi-ezviz">Camera Wifi Ezviz</Link></li>
                <li><Link to="/camera-dahua">Camera Dahua</Link></li>
                <li><Link to="/camera-hikvision">Camera Hikvision</Link></li>
                <li><Link to="/camera-tapo-tp-link">Camera Tapo-TP-Link</Link></li>
                <li><Link to="/camera-hanh-trinh">Camera hành trình</Link></li>
            </ul>
        </li>
        <li className="relative group">
            <Link to="#">Phụ kiện<FontAwesomeIcon icon={faAngleDown} /></Link>
            <ul className="list-menu_secure absolute hidden group-hover:block">
                <li><Link to="/phu-kien-khoa-van-tay">Phụ kiện khóa vân tay</Link></li>
                <li><Link to="/phu-kien-camera">Phụ kiện camera</Link></li>
            </ul>
        </li>
        <li><Link to="/lien-he">Liên hệ</Link></li>
    </>
);

export default Header;
