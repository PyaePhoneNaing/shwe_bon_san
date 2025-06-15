import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Product data with images
  const productCategories = [
    {
      id: 1,
      title: "ရွှေလက်ကောက်များ",
      englishTitle: "Gold Bracelets",
      description: "မြန်မာပုံစံ ရွှေလက်ကောက်များ",
      icon: "📿",
      image: "/sbs_products_1.jpg",
    },
    {
      id: 2,
      title: "စိန်လက်စွပ်များ",
      englishTitle: "Diamond Rings",
      description: "အရည်အသွေးမြင့် စိန်လက်စွပ်များ",
      icon: "💍",
      image: "/sbs_products_2.jpg",
    },
    {
      id: 3,
      title: "ရွှေလည်ကြိုးများ",
      englishTitle: "Gold Necklaces",
      description: "ခေတ်မီ ရွှေလည်ကြိုးများ",
      icon: "📿",
      image: "/sbs_products_3.jpg",
    },
    {
      id: 4,
      title: "နားကပ်များ",
      englishTitle: "Earrings",
      description: "လှပသော နားကပ်များ",
      icon: "👂",
      image: "/sbs_products_1.jpg",
    },
    {
      id: 5,
      title: "လက်ဝတ်ရတနာ စုံလင်",
      englishTitle: "Jewelry Sets",
      description: "မွေးလာဘွားအတွက် လက်ဝတ်ရတနာစုံများ",
      icon: "💎",
      image: "/sbs_products_2.jpg",
    },
    {
      id: 6,
      title: "အမျိုးသား လက်ဝတ်ရတနာ",
      englishTitle: "Men's Jewelry",
      description: "အမျိုးသားများအတွက် လက်ဝတ်ရတနာများ",
      icon: "⌚",
      image: "/sbs_products_3.jpg",
    },
  ];

  // Duplicate the array for seamless looping
  const duplicatedCategories = [...productCategories, ...productCategories];

  return (
    <section id="products" className="products section">
      <div className="container">
        <div className="section-title">
          <h2 className="myanmar-text-bold">ကျွန်ုပ်တို့၏ ထုတ်ကုန်များ</h2>
          <p className="english-text">Our Products</p>
        </div>

        <div
          className={`products-slideshow ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="slideshow-container">
            <div className="slides-wrapper looping">
              {duplicatedCategories.map((product, index) => (
                <div key={`${product.id}-${index}`} className="slide">
                  <div className="product-card">
                    <div className="product-image-container">
                      <img
                        src={product.image}
                        alt={product.englishTitle}
                        className="product-image"
                      />
                      <div className="product-icon-overlay">{product.icon}</div>
                    </div>
                    <div className="product-info">
                      <h3 className="myanmar-text-bold">{product.title}</h3>
                      <h4 className="english-text">{product.englishTitle}</h4>
                      <p className="myanmar-text">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="products-grid">
          {productCategories.map((product) => (
            <div key={product.id} className="product-grid-item">
              <div className="product-icon-large">{product.icon}</div>
              <h4 className="myanmar-text-medium">{product.title}</h4>
              <p className="english-text">{product.englishTitle}</p>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p className="myanmar-text">
            ပိုမိုသိရှိလိုပါက ကျွန်ုပ်တို့ထံ ဆက်သွယ်ပါ
          </p>
          <button className="btn btn-primary myanmar-text-medium">
            ဆက်သွယ်ရန်
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
