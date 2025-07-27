import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faXmark,
    faUser, 
    faShoppingCart,
    faMagnifyingGlass,
    faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
import './css/HeaderMobile.css';

function HeaderMobile() {
const isMobile = useMediaQuery({ maxWidth: 767 });
const [menuOpen, setMenuOpen] = useState(false);
const [dropdownOpen, setDropdownOpen] = useState(false);
const [searchText, setSearchText] = useState("");

if (!isMobile) return null;

return (
    <div className="Container-headerMobile w-full fixed top-0 left-0 z-50">
    <div className="headerMobile-navbar flex justify-between items-center px-4 py-3">
        <div className="headerMobile-navbar_logo">
        <Link to="/">
            <img src="/KPSHOP.png" alt="logo" className="h-12" />
        </Link>
        </div>
        <div className="headerMobile-navbar_menuIcon text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
        </div>

        <div className="headerMobile-navbar_item flex items-center gap-4">
            <div className="item-userMobile text-xl cursor-pointer">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="item-cartMobile text-xl cursor-pointer">
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    </div>
    <div className="headerMobile-search flex px-4 pb-3">
        <input
        type="text"
        placeholder="Tìm sản phẩm..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 px-3 py-2 text-sm rounded-l"
        />
        <button className="search-submit px-4 py-2 text-sm font-semibold rounded-r">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
    </div>
    {menuOpen && (
        <div className="mobileMenu-dropdown px-4 py-3">
            <ul className="space-y-2">
                <li><Link to="/ve-chung-toi">Về chúng tôi</Link></li>
                <li><Link to="/bo-suu-tap">Sản phẩm nội thất</Link></li>
                <li
                className="dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                <div className="flex justify-between items-center">
                    <span>Thiết kế nội thất</span>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
                {dropdownOpen && (
                    <ul className="dropdown-submenu mt-2 pl-3 space-y-1">
                    <li><Link to="/thiet-ke-noi-that-chung-cu">Thiết kế nội thất chung cư</Link></li>
                    <li><Link to="/thiet-ke-noi-that-nha-pho">Thiết kế nội thất nhà phố</Link></li>
                    <li><Link to="/thiet-ke-noi-that-biet-thu">Thiết kế nội thất biệt thự</Link></li>
                    <li><Link to="/thiet-ke-noi-that-van-phong">Thiết kế nội thất văn phòng</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-khach">Thiết kế nội thất phòng khách</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-ngu">Thiết kế nội thất phòng ngủ</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-bep">Thiết kế nội thất phòng bếp</Link></li>
                    <li><Link to="/thiet-ket-noi-that-tu-bep">Thiết kế nội thất tủ bếp</Link></li>
                    </ul>
                )}
                </li>
                <li><Link to="/du-an">Dự án thực tế</Link></li>
                <li><Link to="/lien-he">Liên hệ</Link></li>
            </ul>
        </div>
    )}
    </div>
);
}

export default HeaderMobile;
