import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-title">
          <h2 className="myanmar-text-bold">ရွှေဘုံစံ အကြောင်း</h2>
          <p className="english-text">About Shwe Bon San</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-story">
              <h3 className="myanmar-text-bold">ကျွန်ုပ်တို့၏ ရာဇဝင်</h3>
              <p className="myanmar-text">
                ရွှေဘုံစံ လက်ဝတ်ရတနာဆိုင်သည် မြန်မာနိုင်ငံ၏ အစဉ်အလာရှိသော
                လက်ရာမြတ်များကို ခေတ်မီအလှအပနှင့် ပေါင်းစပ်ကာ
                ထုတ်လုပ်လျက်ရှိပါသည်။ ကျွန်ုပ်တို့သည် အရည်အသွေးမြင့် ရွှေ၊ ငွေ၊
                စိန်နှင့် ကျောက်မျက်ရတနာများဖြင့် လက်ဝတ်ရတနာများကို
                ပညာရှင်လက်မှုသမားများ၏ လက်ရာဖြင့် ပြုလုပ်ပါသည်။
              </p>
            </div>

            <div className="about-values">
              <h3 className="myanmar-text-bold">
                ကျွန်ုပ်တို့၏ ရည်မှန်းချက်များ
              </h3>
              <div className="values-grid">
                <div className="value-item">
                  <div className="value-icon">✨</div>
                  <h4 className="myanmar-text-medium">အရည်အသွေးမြင့်</h4>
                  <p className="myanmar-text">
                    စစ်မှန်သော ပစ္စည်းများသာ အသုံးပြုပါသည်
                  </p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🎨</div>
                  <h4 className="myanmar-text-medium">ခေတ်မီဒီဇိုင်း</h4>
                  <p className="myanmar-text">
                    အစဉ်အလာနှင့်ခေတ်မီပုံစံများ ပေါင်းစပ်ထားသည်
                  </p>
                </div>
                <div className="value-item">
                  <div className="value-icon">💎</div>
                  <h4 className="myanmar-text-medium">ကျွမ်းကျင်သောလက်မှု</h4>
                  <p className="myanmar-text">
                    ပညာရပ်ဆိုင်ရာ လက်မှုသမားများ၏ လက်ရာ
                  </p>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <h4 className="myanmar-text-medium">တရားမျှတမှု</h4>
                  <p className="myanmar-text">
                    ရိုးသားသောစျေးနှုန်းနှင့် ယုံကြည်စိတ်ချရသောဝန်ဆောင်မှု
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/sbs_1.jpg"
              alt="Shwe Bon San Jewelry Shop"
              className="about-photo"
            />
          </div>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label myanmar-text">နှစ်အတွေ့အကြုံ</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1000+</div>
            <div className="stat-label myanmar-text">ကျေနပ်သောဖောက်သည်များ</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label myanmar-text">လက်ဝတ်ရတနာ မျိုးစုံ</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label myanmar-text">ဝန်ဆောင်မှုအပေါ်အထား</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
