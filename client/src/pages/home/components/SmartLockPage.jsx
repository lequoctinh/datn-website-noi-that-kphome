import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart
} from "@fortawesome/free-solid-svg-icons";
    import './css/SmartLockPage.css';

    function SmartLockPage() {
    return (
        <div className="Container-SmartLockPage w-full">
            <div className="SmartLockPage-Content max-w-[1200px] mx-auto px-4 py-6">
                <div className="SmartLockPage-Content_Cate flex flex-wrap items-center gap-4">
                    <div className="subject-pill border-2 px-4 py-2 rounded-md">
                        <h2 className="text-lg md:text-xl font-bold">
                        KHÓA CỬA THÔNG MINH
                        </h2>
                    </div>
                    <div>
                        <Link to="/khoa-van-tay-bosh" className="block px-4 py-2">
                        <h2 className="text-base md:text-lg font-semibold">
                            KHÓA VÂN TAY BOSH
                        </h2>
                        </Link>
                    </div>
                    <div className="divider">|</div>
                    <div>   
                        <Link to="/khoa-cua-huyndai" className="block px-4 py-2">
                        <h2 className="text-base md:text-lg font-medium">
                            KHÓA CỬA HUYNDAI
                        </h2>
                        </Link>
                    </div>
                    <div className="divider">|</div>
                    <div>
                        <Link to="/khoa-cua-hafele" className="block px-4 py-2">
                        <h2 className="text-base md:text-lg font-medium">
                            KHÓA CỬA HAFELE
                        </h2>
                        </Link>
                    </div>
                </div> 
                <div className="SmartLockPage-Content_Products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
                        <div className="SLP-card">
                            <div className="SLP-thumb">
                                <img src="/smartlock/boshms01.jpg" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa điện tử Bosch FU6 Plus
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">14.500.900 đ</span>
                                    <span className="SLP-price">9.300.000 đ</span>
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
                                <img src="/smartlock/boshms02.jpg" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa điện tử Bosch ID60
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">11.500.900 đ</span>
                                    <span className="SLP-price">8.900.000 đ</span>
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
                                <img src="/smartlock/boshms03.jpg" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa điện tử BOSCH EL800VF DE
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">20.500.900 đ</span>
                                    <span className="SLP-price">19.000.000 đ</span>
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
                                <img src="/smartlock/boshms04.jpg" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa điện tử BOSCH FU8 PLUS
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">16.500.900 đ</span>
                                    <span className="SLP-price">10.100.000 đ</span>
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
                                <img src="/smartlock/huyndaims01.png" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">8.990.900 đ</span>
                                    <span className="SLP-price">7.600.000 đ</span>
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
                                <img src="/smartlock/huyndaims02.png" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa cửa gỗ điện tử Hyundai HY-SLA808F BLACK
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">9.990.000 đ</span>
                                    <span className="SLP-price">8.490.000 đ</span>
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
                                <img src="/smartlock/hafelems01.png" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa Điện Tử EL7500 Hafele 912.05.728
                                </Link>

                                <div className="SLP-prices">
                                    <span className="SLP-price-old">8.129.000 đ</span>
                                    <span className="SLP-price">6.100.000 đ</span>
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
                                <img src="/smartlock/hafelems02.png" alt="Khóa cửa gỗ điện tử Hyundai HY-SLA808F BROWN" />
                                </div>
                                <div className="SLP-info">
                                <Link to="/khoa-cua-huyndai" className="SLP-title">
                                    Khóa điện tử DL6000 Hafele 912.20.581
                                </Link>
                                <div className="SLP-prices">
                                    <span className="SLP-price-old">5.764.000 đ</span>
                                    <span className="SLP-price">4.300.000 đ</span>
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
                    <Link to="/khoa-cua-thong-minh" className="SLP-moreBtn">
                        Xem thêm &rarr;
                    </Link>
                    </div>

            </div>
        </div>
    );
    }

    export default SmartLockPage;
