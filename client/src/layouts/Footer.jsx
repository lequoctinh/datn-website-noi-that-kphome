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
                    SECURE SMART HOME – AN TOÀN & ĐẲNG CẤP CHUẨN HÀN
                </h2>
                <div className="content-company space-y-2 text-sm">
                    <div className="content-company_itemEmail flex items-center gap-2">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>securesmarthome@gmail.com</span>
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
                    <li><Link to='/du-an-thuc-te'>Dự án thực tế</Link></li>
                    <li><Link to='/tin-tuc'>Tin tức</Link></li>
                    <li><Link to='/lien-he'>Liên hệ với chúng tôi</Link></li>
                </ul>
            </div>
            <div className="overall-Footer_service grid grid-cols-2 gap-4">
                <div>
                    <p className="service-title text-lg font-semibold mb-2">Khóa cửa thông minh</p>
                    <ul className="list-service space-y-1 text-sm">
                    <li><Link to="/khoa-cua-nhom">Khóa cửa nhôm</Link></li>
                    <li><Link to="/khoa-cua-go">Khóa cửa gỗ</Link></li>
                    <li><Link to="/khoa-cua-cong">Khóa cửa cổng</Link></li>
                    <li><Link to="/khoa-khach-san">Khóa khách sạn</Link></li>
                    <li><Link to="/khoa-dai-sanh">Khóa đại sảnh</Link></li>
                    <li><Link to="/khoa-face-id">Khóa Face ID</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="service-title text-lg font-semibold mb-2">Cửa nhựa Composite</p>
                    <ul className="list-service space-y-1 text-sm">
                    <li><Link to="/cua-phang">Cửa phẳng</Link></li>
                    <li><Link to="/cua-nep-kim-loai">Cửa nẹp kim loại</Link></li>
                    <li><Link to="/cua-o-kinh">Cửa ô kính</Link></li>
                    <li><Link to="/cua-chi-noi">Cửa chỉ nổi</Link></li>
                    <li><Link to="/cua-hut-huynh">Cửa hút huỳnh</Link></li>
                    <li><Link to="/cua-vom">Cửa vòm</Link></li>
                    </ul>
                </div>
            </div>
            <div className="over-Footer_social-links flex flex-col items-center gap-4">
                <div className="logo-Footer">
                    <img src="/SecureHome.png" alt="Logo footer" className="h-14" />
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
            © 2025 - Bản quyền thuộc về securesmarthome.com
            </p>
        </div>
    </div>
);
}

export default Footer;
