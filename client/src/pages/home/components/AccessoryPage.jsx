import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./css/SmartLockPage.css"; // tái dùng style card

function AccessoryPage() {
return (
    <div className="Container-SmartLockPage w-full">
    <div className="SmartLockPage-Content max-w-[1200px] mx-auto px-4 py-6">
        <div className="SmartLockPage-Content_Cate flex flex-wrap items-center gap-4">
        <div className="subject-pill border-2 px-4 py-2 rounded-md">
            <h2 className="text-lg md:text-xl font-bold">PHỤ KIỆN</h2>
        </div>

        <div>
            <Link to="/phu-kien-khoa-van-tay" className="block px-4 py-2">
            <h2 className="text-base md:text-lg font-semibold">
                PHỤ KIỆN KHÓA VÂN TAY
            </h2>
            </Link>
        </div>

        <div className="divider">|</div>

        <div>
            <Link to="/phu-kien-camera" className="block px-4 py-2">
            <h2 className="text-base md:text-lg font-medium">PHỤ KIỆN CAMERA</h2>
            </Link>
        </div>
        </div>
        <div className="SmartLockPage-Content_Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        <div className="SLP-card">
            <div className="SLP-thumb">
            <img src="/accessories/module-01.png" alt="Module Solity Sender kết nối chuông màn hình" />
            </div>
            <div className="SLP-info">
                <Link to="/solity-sender-module-ket-noi-chuong-man-hinh" className="SLP-title">
                    SOLITY SENDER – Module kết nối chuông của màn hình
                </Link>
                <div className="SLP-prices">
                    <span className="SLP-price">1.100.000 đ</span>
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
            <img src="/accessories/module-02.png" alt="Module thu Solity RX-710" />
            </div>
            <div className="SLP-info">
                <Link to="/solity-receiver-module-rx-710" className="SLP-title">
                    SOLITY RECEIVER MODULE RX-710
                </Link>
                <div className="SLP-prices">
                    <span className="SLP-price">700.000 đ</span>
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
            <img src="/accessories/module-03.png" alt="Module Bluetooth Solity BL-100" />
            </div>
            <div className="SLP-info">
                <Link to="/solity-bluetooth-module-bl-100" className="SLP-title">
                    SOLITY BLUETOOTH MODULE BL-100
                </Link>
                <div className="SLP-prices">
                    <span className="SLP-price">1.000.000 đ</span>
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
            <img src="/accessories/the-nho-dahua.png" alt="Thẻ nhớ Dahua 64GB" />
            </div>
            <div className="SLP-info">
            <Link to="/the-nho-dahua-64gb" className="SLP-title">
                Thẻ nhớ Dahua 64GB
            </Link>
            <div className="SLP-prices">
                <span className="SLP-price">200.000 đ</span>
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
            <img src="/accessories/the-nho-imou.png" alt="Thẻ nhớ Imou 64GB" />
            </div>
            <div className="SLP-info">
            <Link to="/the-nho-imou-64gb" className="SLP-title">
                Thẻ nhớ Imou 64GB
            </Link>
            <div className="SLP-prices">
                <span className="SLP-price">200.000 đ</span>
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
            <img src="/accessories/hop-y-noc.png" alt="Hộp INOX bảo vệ khóa điện tử" />
            </div>
            <div className="SLP-info">
            <Link to="/hop-inox-bao-ve-khoa-dien-tu" className="SLP-title">
                Hộp INOX bảo vệ khóa điện tử
            </Link>
            <div className="SLP-prices">
                <span className="SLP-price">300.000 đ</span>
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
        <Link to="/phu-kien" className="SLP-moreBtn">
            Xem thêm &rarr;
        </Link>
        </div>
    </div>
    </div>
);
}

export default AccessoryPage;
