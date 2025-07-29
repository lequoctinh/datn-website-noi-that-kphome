import React from "react";
import ServiceCard from "./ServiceCard";
import "./css/ServiceGrid.css"; 
const services = [
{
    title: "Nội thất chung cư",
    description: "Tối ưu không gian trưng bày, chuyên nghiệp và ấn tượng.",
    image: "/services/chungcu.jpeg",
},
{
    title: "Thiết kế biệt thự",
    description: "Sang trọng, đẳng cấp, mang đậm dấu ấn cá nhân.",
    image: "/services/bietthu.png",
},
{
    title: "Thiết kế phòng khách",
    description: "Không gian sinh hoạt tiện nghi và thẩm mỹ.",
    image: "/services/phongkhach.jpeg",
},
{
    title: "Thiết kế phòng ngủ",
    description: "Mang đến sự thư giãn, tiện nghi và phong cách riêng.",
    image: "/services/phongngu.jpeg",
},
{
    title: "Thiết kế phòng bếp",
    description: "Tối ưu không gian nấu nướng và lưu trữ hiện đại.",
    image: "/services/phongbep.jpeg",
},
{
    title: "Thiết kế văn phòng",
    description: "Tạo môi trường làm việc hiệu quả, sáng tạo và chuyên nghiệp.",
    image: "/services/vanphong.jpg",
},
{
    title: "Thiết kế nhà phố",
    description: "Cân bằng giữa công năng và thẩm mỹ cho không gian sống.",
    image: "/services/nhapho.png",
},
{
    title: "Thiết kế tủ bếp",
    description: "Đa dạng kiểu dáng, chất liệu, tăng tính tiện nghi.",
    image: "/services/tubep.jpg",
},
];

function ServiceGrid() {
  return (
    <div className="Container-ServiceGrid">
    <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#ffd77a]">
        HYUNDAI – KHÓA AN TÂM, MỞ TIỆN NGHI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((item, index) => (
            <ServiceCard
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

export default ServiceGrid;
