import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
faPhone,
faEnvelope,
faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
faFacebookF,
faInstagram,
faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import './css/Footer.css';

function Footer() {
return (
    <div className="ConTaiNer-Footer w-full bg-black text-white">
        <div className="overall-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10">
            <div className="overall-content_company space-y-3">
                <h2 className="content-company_title-company text-lg font-semibold">
                    CÔNG TY TNHH NỘI THẤT KHẢI PHÁT HOME
                </h2>
                <div className="content-company space-y-2 text-sm">
                    <div className="content-company_itemEmail flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>khaiphathome@gmail.com</span>
                    </div>
                    <div className="content-company_itemPhone flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0123 456 789</span>
                    </div>
                    <div className="content-company_itemPhone flex items-center gap-2">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>0098 765 432</span>
                    </div>
                    <div className="content-company_itemMaps flex items-center gap-2">
                        <FontAwesomeIcon icon={faMapLocationDot} />
                        <span>123 Đường ABC, xxx, xxx, TP.HCM</span>
                    </div>
                </div>
            </div>
            <div className="overall-Footer_categories">
                <p className="categories-title text-lg font-semibold mb-2">Danh mục chúng tôi</p>
                <ul className="list-category space-y-1 text-sm">
                    <li><Link to='/ve-chung-toi'>Về chúng tôi</Link></li>
                    <li><Link to='/san-pham-noi-that'>Sản phẩm nội thất</Link></li>
                    <li><Link to='/du-an-thuc-te'>Dự án thực tế</Link></li>
                    <li><Link to='/lien-he'>Liên hệ với chúng tôi</Link></li>
                </ul>
            </div>
            <div className="overall-Footer_service">
                <p className="service-title text-lg font-semibold mb-2">Dịch vụ nội thất</p>
                <ul className="list-service space-y-1 text-sm">
                    <li><Link to="/thiet-ke-noi-that-chung-cu">Thiết kế nội thất chung cư</Link></li>
                    <li><Link to="/thiet-ke-noi-that-nha-pho">Thiết kế nội thất nhà phố</Link></li>
                    <li><Link to="/thiet-ke-noi-that-biet-thu">Thiết kế nội thất biệt thự</Link></li>
                    <li><Link to="/thiet-ke-noi-that-van-phong">Thiết kế nội thất văn phòng</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-khach">Phòng khách</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-ngu">Phòng ngủ</Link></li>
                    <li><Link to="/thiet-ket-noi-that-phong-bep">Phòng bếp</Link></li>
                    <li><Link to="/thiet-ket-noi-that-tu-bep">Tủ bếp</Link></li>
                </ul>
            </div>
            <div className="over-Footer_social-links flex flex-col items-center gap-4">
                <div className="logo-Footer">
                    <img src="/KPSHOP.png" alt="Logo footer" className="h-14" />
                </div>
                <div className="social-links_item flex gap-4 text-xl">
                    <div className="item-Facebook text-[#3b5998]">
                    <a href="https://www.facebook.com/Lequoctinh2512/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    </div>
                    <div className="item-TikTok text-black">
                    <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    </div>
                    <div className="item-Ins text-[#e1306c]">
                    <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    </div>
                    <div className="item-Email text-[#b88e2f]">
                    <Link to="/lien-he">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-copyright text-center py-4">
            <p className="text-sm text-gray-400">
            © 2025 - Bản quyền thuộc về khaiphathome.com
            </p>
        </div>
    </div>
);
}

export default Footer;
