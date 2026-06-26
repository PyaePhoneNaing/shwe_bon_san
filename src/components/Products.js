import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Top row product images
  const topRowImages = [
    "/sbs_products_1.jpg",
    "/sbs_products_2.jpg",
    "/sbs_products_3.jpg",
    "/sbs_products_4.jpg",
    "/sbs_products_5.jpg",
    "/sbs_products_6.jpg",
    "/sbs_products_7.jpg",
    "/sbs_products_8.jpg",
    "/sbs_products_9.jpg",
    "/sbs_products_10.jpg",
    "/sbs_products_11.jpg",
    "/sbs_products_12.jpg",
    "/sbs_products_13.jpg",
    "/sbs_products_14.jpg",
    "/sbs_products_15.jpg",
    "/sbs_products_16.jpg",
    "/sbs_products_17.jpg",
    "/sbs_products_18.jpg",
  ];

  // Bottom row product images
  const bottomRowImages = [
    "/sbs_products_19.jpg",
    "/sbs_products_20.jpg",
    "/sbs_products_21.jpg",
    "/sbs_products_22.jpg",
    "/sbs_products_23.jpg",
    "/sbs_products_24.jpg",
    "/sbs_products_25.jpg",
    "/sbs_products_26.jpg",
    "/sbs_products_27.jpg",
    "/sbs_products_28.jpg",
    "/sbs_products_29.jpg",
    "/sbs_products_30.jpg",
    "/sbs_products_31.jpg",
    "/sbs_products_32.jpg",
    "/sbs_products_33.jpg",
    "/sbs_products_34.jpg",
    "/sbs_products_35.jpg",
  ];

  // Duplicate for seamless looping
  const duplicatedTopImages = [...topRowImages, ...topRowImages];
  const duplicatedBottomImages = [...bottomRowImages, ...bottomRowImages];

  return (
    <section id="products" className="products-slider-section">
      <div
        className={`products-slider ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-row">
          <div className="slider-track">
            {duplicatedTopImages.map((img, idx) => (
              <div className="slider-image-wrapper" key={idx}>
                <img src={img} alt="Product" className="slider-image" />
              </div>
            ))}
          </div>
        </div>
        <div className="slider-row">
          <div className="slider-track">
            {duplicatedBottomImages.map((img, idx) => (
              <div className="slider-image-wrapper" key={idx}>
                <img src={img} alt="Product" className="slider-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
