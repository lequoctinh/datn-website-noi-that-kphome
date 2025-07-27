import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./css/HeroSection.css";

function HeroSection() {
const bannerImages = [
    "/BannerHome/bannerhome1.jpeg",
    "/BannerHome/bannerhome2.jpeg",
    "/BannerHome/bannerhome3.jpeg",
    "/BannerHome/bannerhome4.jpeg",
    "/BannerHome/bannerhome5.jpg",
];

return (
    <div className="Container-HeroSection">
        <div className="HeroSection-banner_background">
            <img src="/background-banner/background-banner.jpeg" alt="" />
        </div>
        <div className="HeroSection-banner_slider">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop={true}
                className="HeroSlider"
            >
                {bannerImages.map((src, index) => (
                <SwiperSlide key={index}>
                    <img src={src} alt={`banner-${index}`} className="w-full h-auto object-cover" />
                </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className="HeroSection-banner_content">
            <h2>NHÀ LÀ KHỞI NGUỒN CỦA MỌI ĐIỀU HẠNH PHÚC</h2>
            <p>Để mỗi ngày được sống đúng và đầy đủ trong tâm hồn. Vì chúng tôi hiểu rõ, mục đích cuối cùng cho những cố gắng để giúp bản thân hạnh phúc hơn!</p>
            <input type="text"  placeholder="Số điện thoại"/>
            <button className="submit-advise">Đăng kí tư vấn</button>
        </div>
    
    </div>
);
}

export default HeroSection;
