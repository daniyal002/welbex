import React from 'react';
import './Footer.css';
import telegram from '../../assets/icon/Telegram.svg';
import viber from '../../assets/icon/Viber.svg';
import whatsapp from '../../assets/icon/WhatsApp.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer__about-company">
            <h3 className="footer__about-company-header footer__header">
              О компании
            </h3>
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
            <h3 className="footer__menu-header footer__header">Меню</h3>
            <ul className="footer__menu-list">
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Расчёт стоимости
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Благодарственные письма
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Услуги
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Кейсы
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Виджеты
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Сертификаты
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Интеграции
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Блог на Youtube
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Наши клиенты
                </a>
              </li>
              <li className="footer__menu-list-items">
                <a href="#" className="footer__menu-list-item-link">
                  Вопрос / Ответ
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__contacts">
            <h3 className="footer__contacts-header footer__header">Контакты</h3>
            <div className="footer__contacts-list">
              <a href="#" className="footer__contacts-list-link-phone">
                +7 555 555-55-55
              </a>
              <ul className="footer__contacts-list-social-list">
                <li className="footer__contacts-list-social-list-item">
                  <a
                    href="#"
                    className="footer__contacts-list-social-list-item-link"
                  >
                    <img
                      src={telegram}
                      alt="Telegram"
                      className="footer__contacts-list-social-list-item-link-img"
                    />
                  </a>
                </li>
                <li className="footer__contacts-list-social-list-item">
                  <a
                    href="#"
                    className="footer__contacts-list-social-list-item-link"
                  >
                    <img
                      src={viber}
                      alt="Viber"
                      className="footer__contacts-list-social-list-item-link-img"
                    />
                  </a>
                </li>
                <li className="footer__contacts-list-social-list-item">
                  <a
                    href="#"
                    className="footer__contacts-list-social-list-item-link"
                  >
                    <img
                      src={whatsapp}
                      alt="WhatsApp"
                      className="footer__contacts-list-social-list-item-link-img"
                    />
                  </a>
                </li>
              </ul>
              <div className="footer__contacts-list-address">
                Москва, Путевой проезд 3с1, к 902
              </div>
            </div>
          </div>

          <div className="footer__copy">
            <p className="footer__copy-text">
              ©WELBEX 2022. Все права защищены.
            </p>
            <a href="#" className="footer__copy-link">
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
