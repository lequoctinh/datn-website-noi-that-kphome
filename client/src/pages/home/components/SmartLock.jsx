import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SmartKey from "./SmartKey";
import "./css/SmartLock.css"; 
const smartlock = [
{
    title: "Khóa cửa nhôm",
    description: "Giải pháp bảo mật bền bỉ, phù hợp cho hệ cửa nhôm hiện đại.",
    image: "/services/khoa-cua-nhom.jpg",
},
{
    title: "Khóa cửa gỗ",
    description: "Thiết kế sang trọng, an toàn cho các dòng cửa gỗ cao cấp.",
    image: "/services/khoa-cua-go.jpg",
},
{
    title: "Khóa cửa cổng",
    description: "Bảo vệ lối ra vào tối đa với khả năng chống chịu thời tiết.",
    image: "/services/khoa-cua-cong.jpg",
},
{
    title: "Khóa khách sạn",
    description: "Quản lý phòng tiện lợi, tích hợp hệ thống check-in hiện đại.",
    image: "/services/khoa-khach-san.jpg",
},
{
    title: "Khóa đại sảnh",
    description: "Giải pháp khóa cho cửa lớn, cửa đại sảnh sang trọng.",
    image: "/services/khoa-dai-sanh.jpg",
},
{
    title: "Khóa Face ID",
    description: "Mở khóa siêu tốc bằng khuôn mặt, công nghệ tiên tiến.",
    image: "/services/khoa-face-id.jpg",
}

];

function SmartLock() {
    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: false,   
        });
    }, []);
return (
    <div className="Container-SmartLock">
        <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-[#ffd77a]" data-aos="fade-up">
            HYUNDAI – KHÓA AN TÂM, MỞ TIỆN NGHI
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" data-aos="fade-up">
            {smartlock.map((item, index) => (
                <SmartKey
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
                />
            ))}
            </div>
        </div>  
    </div>
);
}

export default SmartLock;
