import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="myanmar-text-bold hero-title">
              ရွှေဘုံစံ လက်ဝတ်ရတနာ
            </h1>
            <h2 className="english-text hero-subtitle">Shwe Bon San Jewelry</h2>
            <p className="myanmar-text hero-description">
              အရည်အသွေးမြင့် ရွှေ၊ ငွေ၊ စိန်နှင့် ကျောက်မျက်ရတနာများဖြင့်
              ပြုလုပ်ထားသော လက်ဝတ်ရတနာများကို တရားဝင်စျေးနှုန်းဖြင့်
              ရရှိနိုင်ပါသည်။
            </p>
            <p className="english-text hero-description-en">
              Authentic Myanmar jewelry crafted with premium gold, silver,
              diamonds and precious stones at honest prices.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary myanmar-text-medium">
                ထုတ်ကုန်များကြည့်ရှုရန်
              </button>
              <button className="btn btn-secondary myanmar-text-medium">
                ဆက်သွယ်ရန်
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img
              src={`${process.env.PUBLIC_URL}/sbs_logo.jpg`}
              alt="Shwe Bon San Logo"
              className="hero-photo"
            />
          </div>
        </div>
      </div>

      <div className="hero-decorations">
        <div className="decoration decoration-1">✨</div>
        <div className="decoration decoration-2">💍</div>
        <div className="decoration decoration-3">✨</div>
        <div className="decoration decoration-4">👑</div>
      </div>
    </section>
  );
};

export default Hero;
