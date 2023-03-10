import React from "react";
import telegram from "../../assets/icon/Telegram.svg";
import viber from "../../assets/icon/Viber.svg";
import whatsapp from "../../assets/icon/WhatsApp.svg";
import logo from "../../assets/logo_welbex.svg";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">
          <div className="header__logo">
            <img src={logo} alt="" className="header__logo-img" />
            <span className="header__logo-text">
              крупный интегратор CRM в Росcии и ещё 8 странах
            </span>
          </div>

          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-list-item">
                <a href="#" className="header__nav-list-item-link">
                  Услуги
                </a>
              </li>
              <li className="header__nav-list-item">
                <a href="#" className="header__nav-list-item-link">
                  Виджеты
                </a>
              </li>
              <li className="header__nav-list-item">
                <a href="#" className="header__nav-list-item-link">
                  Интеграции
                </a>
              </li>
              <li className="header__nav-list-item">
                <a href="#" className="header__nav-list-item-link">
                  Кейсы
                </a>
              </li>
              <li className="header__nav-list-item">
                <a href="#" className="header__nav-list-item-link mobile-none">
                  Сертификаты
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__social">
            <ul className="header__social-list">
              <li className="header__social-list-item">
                <a
                  href="#"
                  className="header__social-list-item-link header__social-list-item-link-phone "
                >
                  +7 555 555-55-55
                </a>
              </li>
              <li className="header__social-list-item">
                <a href="#" className="header__social-list-item-link">
                  <img
                    src={telegram}
                    alt="Telegram"
                    className="header__social-list-item-link-img"
                  />
                </a>
              </li>
              <li className="header__social-list-item">
                <a href="#" className="header__social-list-item-link">
                  <img
                    src={viber}
                    alt="Viber"
                    className="header__social-list-item-link-img"
                  />
                </a>
              </li>
              <li className="header__social-list-item">
                <a href="#" className="header__social-list-item-link">
                  <img
                    src={whatsapp}
                    alt="WhatsApp"
                    className="header__social-list-item-link-img"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
