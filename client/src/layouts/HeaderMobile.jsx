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
const [openDropdown1, setOpenDropdown1] = useState(false); // cho Khóa cửa thông minh
const [openDropdown2, setOpenDropdown2] = useState(false); // cho Cửa nhựa Composite
const [searchText, setSearchText] = useState("");

if (!isMobile) return null;

return (
    <div className="Container-headerMobile w-full fixed top-0 left-0 z-50">
    <div className="headerMobile-navbar flex justify-between items-center px-4 py-3">
        <div className="headerMobile-navbar_logo">
        <Link to="/">
            <img src="/Hyundai.png" alt="logo" className="h-12" />
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
                    <li>
                        <Link to="/ve-chung-toi">Về chúng tôi</Link>
                    </li>
                    <li className="dropdown-toggle" onClick={() => setOpenDropdown1(!openDropdown1)}>
                        <div className="flex justify-between items-center">
                            <span>Khóa cửa thông minh</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        {openDropdown1 && (
                            <ul className="dropdown-submenu mt-2 pl-3 space-y-1">
                            <li><Link to="/khoa-cua-nhom">Khóa cửa nhôm</Link></li>
                            <li><Link to="/khoa-cua-go">Khóa cửa gỗ</Link></li>
                            <li><Link to="/khoa-cua-cong">Khóa cửa cổng</Link></li>
                            <li><Link to="/khoa-khach-san">Khóa khách sạn</Link></li>
                            <li><Link to="/khoa-dai-sanh">Khóa đại sảnh</Link></li>
                            <li><Link to="/khoa-face-id">Khóa Face ID</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className="dropdown-toggle" onClick={() => setOpenDropdown2(!openDropdown2)}>
                        <div className="flex justify-between items-center">
                            <span>Cửa nhựa Composite</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                        {openDropdown2 && (
                            <ul className="dropdown-submenu mt-2 pl-3 space-y-1">
                            <li><Link to="/cua-phang">Cửa phẳng</Link></li>
                            <li><Link to="/cua-nep-kim-loai">Cửa nẹp kim loại</Link></li>
                            <li><Link to="/cua-o-kinh">Cửa ô kính</Link></li>
                            <li><Link to="/cua-chi-noi">Cửa chỉ nổi</Link></li>
                            <li><Link to="/cua-hut-huynh">Cửa hút huỳnh</Link></li>
                            <li><Link to="/cua-vom">Cửa vòm</Link></li>
                            </ul>
                        )}
                    </li>
                    <li>
                        <Link to="/du-an">Dự án thực tế</Link>
                    </li>
                    <li>
                        <Link to="/lien-he">Liên hệ</Link>
                    </li>
                </ul>
            </div>
        )}
    </div>
);
}

export default HeaderMobile;
