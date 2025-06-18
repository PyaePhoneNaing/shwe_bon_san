import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <h1 className="myanmar-text-bold">ရွှေဘုံစံ ပရင့်ဇက်(စ်)</h1>
            <span className="english-text">Shwe Bon San Princess</span>
          </div>

          <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
            <ul>
              <li>
                <a
                  href="#home"
                  onClick={() => scrollToSection("home")}
                  className="myanmar-text"
                >
                  ပင်မစာမျက်နှာ
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => scrollToSection("about")}
                  className="myanmar-text"
                >
                  ကျွန်ုပ်တို့အကြောင်း
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={() => scrollToSection("products")}
                  className="myanmar-text"
                >
                  ထုတ်ကုန်များ
                </a>
              </li>
              <li>
                <a
                  href="#video"
                  onClick={() => scrollToSection("video")}
                  className="myanmar-text"
                >
                  ဗီဒီယို
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => scrollToSection("contact")}
                  className="myanmar-text"
                >
                  ဆက်သွယ်ရန်
                </a>
              </li>
            </ul>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
