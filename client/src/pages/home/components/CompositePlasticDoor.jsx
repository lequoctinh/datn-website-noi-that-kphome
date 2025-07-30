import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CompositeKey from "./CompositeKey";
import "./css/CompositePlasticDoor.css";

const compositeDoors = [
{
    title: "Cửa phẳng",
    description: "Thiết kế đơn giản, hiện đại, phù hợp nhiều không gian nội thất.",
    image: "/services/cua-phang.png",
},
{
    title: "Cửa nẹp kim loại",
    description: "Tăng độ bền và thẩm mỹ với chi tiết nẹp kim loại sang trọng.",
    image: "/services/cua-nep-kim-loai.jpg",
},
{
    title: "Cửa ô kính",
    description: "Mang lại sự thông thoáng và ánh sáng với thiết kế ô kính tinh tế.",
    image: "/services/cua-o-kinh.jpg",
},
{
    title: "Cửa chỉ nổi",
    description: "Họa tiết chỉ nổi độc đáo, tạo điểm nhấn cho không gian sống.",
    image: "/services/cua-chi-noi.png",
},
{
    title: "Cửa hút huỳnh",
    description: "Cấu tạo đặc biệt giúp chống cong vênh, cách âm vượt trội.",
    image: "/services/cua-hut-huynh.jpeg",
},
{
    title: "Cửa vòm",
    description: "Tạo phong cách cổ điển và sang trọng với thiết kế cửa vòm mềm mại.",
    image: "/services/cua-vom.jpg",
},
];

function CompositePlasticDoor() {
    useEffect(() => {
            AOS.init({
            duration: 1000, 
            once: false,   
            });
    }, []);
return (
    <div className="Container-CompositePlasticDoor">
    <div className="max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#ffd77a]" data-aos="fade-up">
        CỬA NHỰA COMPOSITE – BỀN ĐẸP, CHỐNG NƯỚC TUYỆT ĐỐI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6" data-aos="fade-up">
        {compositeDoors.map((item, index) => (
            <CompositeKey
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

export default CompositePlasticDoor;
