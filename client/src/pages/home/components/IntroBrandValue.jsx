import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/IntroBrandValue.css";

function IntroBrandValue() {
useEffect(() => {
    AOS.init({
    duration: 1000,     
    once: false,          
    });
}, []);

return (
    <div className="Container-IntroBrandValue w-full py-12">
        <div className="IntroBrandValue-content max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center px-4">
            <div className="IntroBrandValue-content_text space-y-4" data-aos="fade-up">
                <h2 className="text-heading">THÂN GỬI</h2>
            <span className="text-subheading">
                GIÁ TRỊ CỐT LÕI MÀ <strong className="highlight">SECURE SMART HOME</strong> MANG LẠI CHO NGÔI NHÀ BẠN
            </span>
            <p className="text-paragraph">
                Nhắc đến ngôi nhà là nhắc đến nơi trở về – nơi chứa đựng những khoảnh khắc bình yên và yêu thương. 
                Trong một thế giới hiện đại, an toàn và tiện nghi không chỉ là mong muốn, mà là điều tất yếu để bảo vệ hạnh phúc ấy.
            </p>
            <p className="text-paragraph">
                <strong className="highlight">SECURE SMART HOME</strong> mang đến các giải pháp thông minh như khóa cửa điện tử, 
                cửa nhựa an toàn, giúp bạn kiểm soát ngôi nhà dễ dàng, bảo vệ người thân, 
                và tận hưởng trọn vẹn từng phút giây bên gia đình.
            </p>
            <p className="text-paragraph">Chúng tôi hiểu rằng, công nghệ chỉ có ý nghĩa khi phục vụ cho hạnh phúc con người. Đó là lý do mỗi sản phẩm  <strong className="highlight">SECURE SMART HOME </strong> đều được phát triển để trở thành người bạn đồng hành
                tin cậy trong tổ ấm của bạn – hôm nay và cả mai sau.</p>
            </div>
            <div className="IntroBrandValue-content_image w-full" data-aos="zoom-in">
            <img
                src="/IntroBrandValue/IntroBrandValue.jpg"
                alt="Giá trị Khải Phát"
                className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            </div>
        </div>
    </div>
);
}

export default IntroBrandValue;
