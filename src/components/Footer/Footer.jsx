import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__about-company">
            <h3 className="footer__about-company-header">О компании</h3>
            <ul className="footer__about-comany-list">
              <li className="footer__about-comany-list-items">
                <a href="" className="footer__about-comany-list-item-link">
                  Партнёрская программа
                </a>
              </li>
              <li className="footer__about-comany-list-items">
                <a href="" className="footer__about-comany-list-item-link">
                  Вакансии
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__menu">
            <h3 className="footer__menu-header">Меню</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Расчёт стоимости
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Услуги
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Виджеты
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Интеграции
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Наши клиенты
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
