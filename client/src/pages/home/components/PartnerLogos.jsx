import React from "react";
import "./css/PartnerLogos.css";

const logos = [
{ src: "/PartnerLogos/logo_ezviz.jpg", alt: "EZVIZ" },
{ src: "/PartnerLogos/logo_hikvision.jpg", alt: "Hikvision" },
{ src: "/PartnerLogos/logo_bosh.jpg", alt: "Bosch" },
{ src: "/PartnerLogos/logo_dahua.jpg", alt: "Dahua" },
{ src: "/PartnerLogos/logo_hafele.jpg", alt: "Hafele" },
{ src: "/PartnerLogos/logo_hubert.jpg", alt: "Hubert" },
{ src: "/PartnerLogos/logo_hyundai.png", alt: "Hyundai" },
{ src: "/PartnerLogos/logo_imou.png", alt: "Imou" },
{ src: "/PartnerLogos/logo_kaadas.jpg", alt: "Kaadas" },
{ src: "/PartnerLogos/logo_pimadoor.png", alt: "Pimadoor" },
{ src: "/PartnerLogos/logo_tapo.jpg", alt: "Tapo" },
];

function PartnerLogos() {
return (
    <div className="Container-PartnerLogos flex flex-col items-center gap-6">
    <div className="PartnerLogos-Content text-center">
        <h2 className="PartnerLogos-title">Đối tác của chúng tôi</h2>
        <p className="text-dim mt-2">
            Những thương hiệu đồng hành & phân phối sản phẩm
        </p>
    </div>


    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center w-full max-w-6xl">
        {logos.map((logo, index) => (
        <div key={index} className="PartnerLogos-card">
            <img src={logo.src} alt={logo.alt} loading="lazy" />
        </div>
        ))}
    </div>
    </div>
);
}

export default PartnerLogos;
