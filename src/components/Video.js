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
          <div className="video-grid">
            {[1, 2, 3, 4, 5].map((num) => (
              <div className="video-item" key={num}>
                <video className="video-element" controls>
                  <source src={`/sbs_vd_${num}.mp4`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="video-description">
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
        </div> */}
      </div>
    </section>
  );
};

export default Video;
