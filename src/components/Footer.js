import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3 className="myanmar-text-bold">ရွှေဘုံစံ</h3>
              <p className="english-text">Shwe Bon San Princess Jewelry</p>
            </div>
            <p className="myanmar-text footer-description">
              မြန်မာနိုင်ငံ၏ အရည်အသွေးမြင့် လက်ဝတ်ရတနာများကို
              သင့်တင်မျှတသောစျေးနှုန်းဖြင့် ရရှိနိုင်သော ယုံကြည်စိတ်ချရသော ဆိုင်
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                📘
              </a>
              <a href="#" className="social-icon">
                📷
              </a>
              <a href="#" className="social-icon">
                💬
              </a>
              <a href="#" className="social-icon">
                📞
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="myanmar-text-bold">လမ်းညွှန်များ</h4>
            <ul className="footer-links">
              <li>
                <a href="#home" className="myanmar-text">
                  ပင်မစာမျက်နှာ
                </a>
              </li>
              <li>
                <a href="#about" className="myanmar-text">
                  ကျွန်ုပ်တို့အကြောင်း
                </a>
              </li>
              <li>
                <a href="#products" className="myanmar-text">
                  ထုတ်ကုန်များ
                </a>
              </li>
              <li>
                <a href="#video" className="myanmar-text">
                  ဗီဒီယို
                </a>
              </li>
              <li>
                <a href="#contact" className="myanmar-text">
                  ဆက်သွယ်ရန်
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="myanmar-text-bold">ထုတ်ကုန်များ</h4>
            <ul className="footer-links">
              <li>
                <a href="#products" className="myanmar-text">
                  ရွှေလက်ကောက်များ
                </a>
              </li>
              <li>
                <a href="#products" className="myanmar-text">
                  စိန်လက်စွပ်များ
                </a>
              </li>
              <li>
                <a href="#products" className="myanmar-text">
                  ရွှေလည်ကြိုးများ
                </a>
              </li>
              <li>
                <a href="#products" className="myanmar-text">
                  နားကပ်များ
                </a>
              </li>
              <li>
                <a href="#products" className="myanmar-text">
                  လက်ဝတ်ရတနာ စုံလင်
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="myanmar-text-bold">ဆက်သွယ်ရန်</h4>
            <div className="footer-contact">
              <p className="myanmar-text">
                <span className="contact-icon">📍</span>
                အမှတ် (၁၅၁)၊ တင့်ဆန်းလမ်းနှင့် အနောက်ဗဟိုလမ်းကြား၊
                ဦးချစ်မောင်လမ်းမကြီးပေါ်၊ ဗဟန်းမြို့နယ်၊ ရန်ကုန်မြို့
              </p>
              <p>
                <span className="contact-icon">📞</span>
                09 890 555 667
              </p>
              <p>
                <span className="contact-icon">✉️</span>
                hninayesan16@gmail.com
              </p>
              <p className="myanmar-text">
                <span className="contact-icon">🕒</span>
                နံနက် ၉ နာရီ - ညနေ ၇ နာရီ
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="myanmar-text">
              © {currentYear} ရွှေဘုံစံ လက်ဝတ်ရတနာ။ မူပိုင်ခွင့်အားလုံး
              ရယူထားပါသည်။
            </p>
            <p className="english-text">
              © {currentYear} Shwe Bon San Princess Jewelry. All rights
              reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="myanmar-text">
                မူဝါဒများ
              </a>
              <a href="#" className="myanmar-text">
                အသုံးပြုမှုစည်းမျဉ်း
              </a>
              <a href="#" className="myanmar-text">
                ကိုယ်ရေးကိုယ်တာအချက်အလက်
              </a>
            </div>
          </div>

          <div className="footer-badges">
            <div className="badge">
              <span className="badge-icon">✨</span>
              <span className="myanmar-text">အရည်အသွေးအာမခံ</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🛡️</span>
              <span className="myanmar-text">လုံခြုံမှုအာမခံ</span>
            </div>
            <div className="badge">
              <span className="badge-icon">🤝</span>
              <span className="myanmar-text">ယုံကြည်စိတ်ချရသော</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-decoration">
        <div className="decoration-pattern"></div>
      </div>
    </footer>
  );
};

export default Footer;
