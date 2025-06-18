import React, { useState } from "react";
import "./Products.css";

const Products = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Product images
  const productImages = [
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
    "/sbs_products_19.jpg",
    "/sbs_products_20.jpg",
  ];

  // Duplicate for seamless looping
  const duplicatedImages = [...productImages, ...productImages];

  return (
    <section id="products" className="products-slider-section">
      <div
        className={`products-slider ${isPaused ? "paused" : ""}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slider-row">
          <div className="slider-track">
            {duplicatedImages.map((img, idx) => (
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
