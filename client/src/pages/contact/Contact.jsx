import { useState } from "react";
// import './css/css.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // state để lưu thông báo

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage(`🎉 Cảm ơn ${formData.name}, chúng tôi đã nhận được thông tin của bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất.`);

    // reset form sau khi gửi
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="contact-page p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Liên hệ với chúng tôi</h2>

      <div className="contact-map mb-8">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4355252855394!2d106.6248237114372!3d10.854441557703524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1755657555973!5m2!1svi!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="contact-infor mb-6">
        <p>📍 Địa chỉ: 123 Đường ABC, xxx, xxx, TP.HCM</p>
        <p>📞 Hotline: 0123 456 789</p>
        <p>📞 Hotline: 0098 765 432</p>
        <p>📧 Email: securesmarthome@gmail.com</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          className="border p-2 rounded"
          value={formData.phone}
          onChange={handleChange}
          required
          pattern="0[0-9]{9}"
          title="Số điện thoại phải gồm 10 chữ số"
        />
        <textarea
          name="message"
          placeholder="Nội dung"
          className="border p-2 rounded"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Gửi liên hệ
        </button>
      </form>

      {successMessage && (
        <p className="text-green-600 font-semibold mt-4">{successMessage}</p>
      )}
    </div>
  );
}

export default Contact;




