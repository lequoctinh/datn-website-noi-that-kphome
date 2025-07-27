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
                GIÁ TRỊ CỐT LÕI MÀ <strong className="highlight">NỘI THẤT KHẢI PHÁT</strong> MANG LẠI CHO BẠN
            </span>
            <p className="text-paragraph">
                Nhắc đến nhà là nhắc đến nơi thiêng liêng ấm cúng, nơi mà ai ai cũng muốn trở về để được tận hưởng cảm giác yên bình,
                cảm giác sum vầy, bỏ bên ngoài cánh cửa kia những khó khăn bộn bề của cuộc sống.
            </p>
            <p className="text-paragraph">
                Chúng tôi, <strong className="highlight">NỘI THẤT KHẢI PHÁT</strong> luôn mong muốn mang đến cho bạn một không gian để bạn cảm thấy
                “đây đích thực là nơi yêu dấu của mình rồi!” Và với mong muốn đó, chúng tôi từng ngày nỗ lực để thấu hiểu bạn và mang đến cho bạn
                những sản phẩm tạo nên giá trị sống thực sự.
            </p>
            </div>
            <div className="IntroBrandValue-content_image w-full" data-aos="zoom-in">
            <img
                src="/IntroBrandValue/IntroBrandValue.jpeg"
                alt="Giá trị Khải Phát"
                className="w-full h-auto object-cover rounded-lg shadow-md"
            />
            </div>
        </div>
    </div>
);
}

export default IntroBrandValue;
