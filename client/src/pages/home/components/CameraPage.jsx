import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./css/SmartLockPage.css"; // tái dùng style thẻ card

function CameraPage() {
return (
    <div className="Container-SmartLockPage w-full">
    <div className="SmartLockPage-Content max-w-[1200px] mx-auto px-4 py-6">
        {/* Thanh điều hướng danh mục */}
        <div className="SmartLockPage-Content_Cate flex flex-wrap items-center gap-4">
        <div className="subject-pill border-2 px-4 py-2 rounded-md">
            <h2 className="text-lg md:text-xl font-bold">CAMERA GIÁM SÁT</h2>
        </div>

        <div>
            <Link to="/camera-wifi-imou" className="block px-4 py-2">
            <h2 className="text-base md:text-lg font-semibold">CAMERA WIFI IMOU</h2>
            </Link>
        </div>

        <div className="divider">|</div>

        <div>
            <Link to="/camera-wifi-ezviz" className="block px-4 py-2">
            <h2 className="text-base md:text-lg font-medium">CAMERA WIFI EZVIZ</h2>
            </Link>
        </div>

        <div className="divider">|</div>

        <div>
            <Link to="/camera-dahua" className="block px-4 py-2">
            <h2 className="text-base md:text-lg font-medium">CAMERA DAHUA</h2>
            </Link>
        </div>
        </div>
        <div className="SmartLockPage-Content_Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/cameraimou01.png" alt="Camera Imou IPC-C22SP (Cue 2E)" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ipc-c22sp" className="SLP-title">Imou IPC-C22SP (Cue 2E)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">790.000 đ</span>
                <span className="SLP-price">395.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/cameraimou02.png" alt="Camera Imou IPC-A32EP (Ranger 2, 3MP)" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ipc-a32ep" className="SLP-title">Imou IPC-A32EP (Ranger 2, 3MP)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">810.000 đ</span>
                <span className="SLP-price">405.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/cameraimou03.png" alt="Camera Imou IPC-C22FP-C (Versa)" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ipc-c22fp-c" className="SLP-title">Imou IPC-C22FP-C (Versa)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">950.000 đ</span>
                <span className="SLP-price">650.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/camera-ezviz01.png" alt="Camera Ezviz H1C 2MP" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ezviz-h1c" className="SLP-title">Camera Ezviz H1C 2MP</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">768.000 đ</span>
                <span className="SLP-price">400.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/camera-ezviz02.png" alt="Camera Ezviz C6N Pro 2K (3MP)" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ezviz-c6n" className="SLP-title">Camera Ezviz C6N Pro 2K (3MP)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">768.000 đ</span>
                <span className="SLP-price">450.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/camera-ezviz03.png" alt="Camera Ezviz H6C Pro 2K (3MP)" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-ezviz-h6c" className="SLP-title">Camera Ezviz H6C Pro 2K (3MP)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">768.000 đ</span>
                <span className="SLP-price">450.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/camera-dahua01.png" alt="Camera IP 2MP Dome Dahua DH-IPC-T1E29-A-IL" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-dahua-t1e29" className="SLP-title">Camera Dahua DH-IPC-T1E29-A-IL (2MP)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">1.999.000 đ</span>
                <span className="SLP-price">619.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/camera/camera-dahua02.png" alt="Camera IP 8MP Dahua DH-IPC-HFW2841T-ZAS" />
            </div>
            <div className="SLP-info">
            <Link to="/camera-dahua-hfw2841" className="SLP-title">Camera Dahua DH-IPC-HFW2841T-ZAS (8MP)</Link>
            <div className="SLP-prices">
                <span className="SLP-price-old">7.990.000 đ</span>
                <span className="SLP-price">3.697.000 đ</span>
            </div>
            <div className="SLP-actions">
                <button type="button" className="SLP-compare">So sánh</button>
                <button type="button" className="SLP-cart" aria-label="Thêm vào giỏ">
                <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
            </div>
        </div>
        </div>
        <div className="SmartLockPage-SeeMore text-center mt-6">
        <Link to="/camera-giam-sat" className="SLP-moreBtn">
            Xem thêm &rarr;
        </Link>
        </div>
    </div>
    </div>
);
}

export default CameraPage;
