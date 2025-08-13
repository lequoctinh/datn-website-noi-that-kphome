    import React from "react";
    import { Link } from "react-router-dom";
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
            </div>
        </div>
    );
    }

    export default SmartLockPage;
