import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faAngleDown,
faMagnifyingGlass,
faUser,
faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

import './css/Header.css';

function Header() {
return (
    <div className="ConTaiNer-Header w-full fixed top-0 left-0 z-50">
        <div className="header-navbar flex justify-between items-center max-w-[1200px] mx-auto px-4 py-3">
            <div className="header-navbar_logo">
                <img src="/KPSHOP.png" alt="Logo" className="h-14" />
            </div>
            <div className="header-navbar_menu">
                <ul className="list-menu flex space-x-6 items-center text-[15px] font-medium">
                    <li><Link to="/ve-chung-toi">Về chúng tôi</Link></li>
                    <li><Link to="/bo-suu-tap">Sản phẩm nội thất</Link></li>
                    <li className="relative group">
                    <Link to="#">
                        Thiết kế nội thất <FontAwesomeIcon icon={faAngleDown} />
                    </Link>
                    <ul className="list-menu_thietkenoithat absolute hidden group-hover:block">
                        <li><Link to="/thiet-ke-noi-that-chung-cu">Chung cư</Link></li>
                        <li><Link to="/thiet-ke-noi-that-nha-pho">Nhà phố</Link></li>
                        <li><Link to="/thiet-ke-noi-that-biet-thu">Biệt thự</Link></li>
                        <li><Link to="/thiet-ke-noi-that-van-phong">Văn phòng</Link></li>
                        <li><Link to="/thiet-ket-noi-that-phong-khach">Phòng khách</Link></li>
                        <li><Link to="/thiet-ket-noi-that-phong-ngu">Phòng ngủ</Link></li>
                        <li><Link to="/thiet-ket-noi-that-phong-bep">Phòng bếp</Link></li>
                        <li><Link to="/thiet-ket-noi-that-tu-bep">Tủ bếp</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/du-an">Dự án thực tế</Link></li>
                    <li><Link to="/lien-he">Liên hệ</Link></li>
                </ul>
            </div>
            <div className="header-navbar_item flex items-center gap-4 text-lg">
            <div className="item-search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="item-users">
                <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="item-cart">
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
            </div>
        </div>
    </div>
);
}

export default Header;
