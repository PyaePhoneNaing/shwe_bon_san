import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    alert("ကျေးးဇူးတင်ပါသည်! ကျွန်ုပ်တို့ မကြာမီ ပြန်လည်ဆက်သွယ်ပါမည်။");
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2 className="myanmar-text-bold">ကျွန်ုပ်တို့နှင့် ဆက်သွယ်ရန်</h2>
          <p className="english-text">Contact Us</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4 className="myanmar-text-bold">လိပ်စာ</h4>
                <p className="myanmar-text">
                  အမှတ် (၁၅၁)၊ တင့်ဆန်းလမ်းနှင့် အနောက်ဗဟိုလမ်းကြား
                  <br />
                  ဦးချစ်မောင်လမ်းမကြီးပေါ်၊
                  <br />
                  ဗဟန်းမြို့နယ်၊ ရန်ကုန်မြို့
                </p>
                <p className="english-text">
                  No. (151), Between Tint San Road and West Central Road,
                  <br />
                  On U Chit Maung Road,
                  <br />
                  Bahan Tsp, Yangon
                </p>
                <a
                  href="https://maps.app.goo.gl/JLtkSJDVy3t5Akgd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link myanmar-text-medium"
                >
                  🗺️ မြေပုံတွင် ကြည့်ရန်
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4 className="myanmar-text-bold">ဖုန်းနံပါတ်</h4>
                <p className="myanmar-text">09 890 555 667</p>
                <p className="myanmar-text">09 890 555 677</p>
                <p className="english-text">Available 9 AM - 7 PM</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div className="contact-details">
                <h4 className="myanmar-text-bold">အီးမေးလ်</h4>
                <p>info@shwebonesan.com</p>
                <p>sales@shwebonesan.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div className="contact-details">
                <h4 className="myanmar-text-bold">ဖွင့်ချိန်</h4>
                <p className="myanmar-text">
                  တနင်္လာ - စနေ: နံနက် ၉ နာရီ - ညနေ ၇ နာရီ
                  <br />
                  တနင်္ဂနွေ: နံနက် ၁၀ နာရီ - ညနေ ၅ နာရီ
                </p>
                <p className="english-text">
                  Mon - Sat: 9:00 AM - 7:00 PM
                  <br />
                  Sunday: 10:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="myanmar-text-bold">မက်ဆေ့ခ်ပို့ရန်</h3>
            <p className="myanmar-text">
              ကျွန်ုပ်တို့နှင့် ဆက်သွယ်လိုသော အကြောင်းအရာများကို ဖြည့်သွင်းပါ
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="myanmar-text">အမည်</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="သင်၏အမည်ကို ရေးပါ"
                  required
                />
              </div>

              <div className="form-group">
                <label className="myanmar-text">အီးမေးလ်</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label className="myanmar-text">ဖုန်းနံပါတ်</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+95 9 xxx xxx xxx"
                />
              </div>

              <div className="form-group">
                <label className="myanmar-text">မက်ဆေ့ခ်</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="သင်ပေးပို့လိုသော မက်ဆေ့ခ်ကို ရေးပါ"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary myanmar-text-medium"
              >
                မက်ဆေ့ခ်ပို့ရန်
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h3 className="myanmar-text-bold">ကျွန်ုပ်တို့၏ တည်နေရာ</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.0!2d96.1!3d16.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzAwLjAiTiA5NsKwMDYnMDAuMCJF!5e0!3m2!1sen!2smm!4v1234567890"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shwe Bon San Location"
            ></iframe>
            <div className="map-overlay">
              <a
                href="https://maps.app.goo.gl/JLtkSJDVy3t5Akgd7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary myanmar-text-medium"
              >
                🗺️ Google Maps တွင် ကြည့်ရန်
              </a>
            </div>
          </div>
        </div>

        <div className="social-media">
          <h3 className="myanmar-text-bold">ကျွန်ုပ်တို့ကို လိုက်ကြည့်ပါ</h3>
          <div className="social-links">
            <a href="#" className="social-link facebook">
              <span>📘</span>
              <span className="myanmar-text">Facebook</span>
            </a>
            <a href="#" className="social-link instagram">
              <span>📷</span>
              <span className="myanmar-text">Instagram</span>
            </a>
            <a href="#" className="social-link whatsapp">
              <span>💬</span>
              <span className="myanmar-text">WhatsApp</span>
            </a>
            <a href="#" className="social-link viber">
              <span>📞</span>
              <span className="myanmar-text">Viber</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
