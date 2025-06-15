import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <section id="video" className="video section">
      <div className="container">
        <div className="section-title">
          <h2 className="myanmar-text-bold">ကျွန်ုပ်တို့၏ ဗီဒီယိုများ</h2>
          <p className="english-text">Our Videos</p>
        </div>

        <div className="video-content">
          <div className="main-video">
            <div className="video-placeholder">
              <div className="play-button">
                <div className="play-icon">▶</div>
              </div>
              <div className="video-overlay">
                <h3 className="myanmar-text-bold">
                  ရွှေဘုံစံ လက်ဝတ်ရတနာ မိတ်ဆက်ဗီဒီယို
                </h3>
                <p className="english-text">
                  Shwe Bon San Jewelry Introduction Video
                </p>
                <p className="myanmar-text">ဗီဒီယို မကြာမီ ထည့်သွင်းပါမည်</p>
                <p className="english-text">Video coming soon</p>
              </div>
            </div>
          </div>

          <div className="video-grid">
            <div className="video-item">
              <div className="video-thumbnail">
                <div className="thumbnail-icon">🎥</div>
                <div className="play-overlay">▶</div>
              </div>
              <div className="video-info">
                <h4 className="myanmar-text-medium">လက်ဝတ်ရတနာ ပြုလုပ်ခြင်း</h4>
                <p className="english-text">Jewelry Making Process</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video-thumbnail">
                <div className="thumbnail-icon">💍</div>
                <div className="play-overlay">▶</div>
              </div>
              <div className="video-info">
                <h4 className="myanmar-text-medium">ထုတ်ကုန်များ ပြသခြင်း</h4>
                <p className="english-text">Product Showcase</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video-thumbnail">
                <div className="thumbnail-icon">👥</div>
                <div className="play-overlay">▶</div>
              </div>
              <div className="video-info">
                <h4 className="myanmar-text-medium">ဖောက်သည်များ၏ အမြင်</h4>
                <p className="english-text">Customer Testimonials</p>
              </div>
            </div>

            <div className="video-item">
              <div className="video-thumbnail">
                <div className="thumbnail-icon">🏪</div>
                <div className="play-overlay">▶</div>
              </div>
              <div className="video-info">
                <h4 className="myanmar-text-medium">ဆိုင်သွားလာခြင်း</h4>
                <p className="english-text">Shop Tour</p>
              </div>
            </div>
          </div>
        </div>

        <div className="video-description">
          <div className="description-content">
            <h3 className="myanmar-text-bold">ကျွန်ုပ်တို့၏ လုပ်ငန်းခွင်</h3>
            <p className="myanmar-text">
              ရွှေဘုံစံ လက်ဝတ်ရတနာဆိုင်၏ လုပ်ငန်းခွင်နှင့် ကျွမ်းကျင်သော
              လက်မှုသမားများ၏ လက်ရာများကို ဗီဒီယိုများမှတစ်ဆင့်
              ကြည့်ရှုနိုင်ပါသည်။ ကျွန်ုပ်တို့၏ လက်ဝတ်ရတနာများ
              ပြုလုပ်သည့်လုပ်ငန်းစဉ်မှ စတင်၍ အပြီးသတ်ထုတ်ကုန်များအထိ
              အသေးစိတ်ကြည့်ရှုနိုင်ပါသည်။
            </p>
            <p className="english-text">
              Watch our skilled craftsmen at work and see the detailed process
              of creating beautiful Myanmar traditional jewelry with modern
              touches. From raw materials to finished masterpieces, experience
              the art of jewelry making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
