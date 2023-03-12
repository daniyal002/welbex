import React from 'react';
import './MainScreen.css';
import line from '../../assets/Line.svg';

const MainScreen = () => {
  return (
    <main>
      <div className="container">
        <div className="mainScreen">
          <div className="mainScreen__main-text">
            <p className="mainScreen__main-text-weblex">
              Зарабатывайте <br /> больше <br /> <span>c WELBEX</span>
            </p>
            <p className="mainScreen__main-text-paragraf">
              Развиваем и контролируем <br /> продажи за вас
            </p>
          </div>

          <div className="mainScreen__consultation">
            <p className="mainScreen__consultation-main-text">
              Вместе c&nbsp;
              <span>
                бесплатной <br /> консультацией
              </span>
              &nbsp; мы дарим:
            </p>
            <div className="mainScreen__consultation-advantages">
              <div className="mainScreen__consultation-advantages-vidgets">
                <h3 className="mainScreen__consultation-advantages-vidgets-headers advantages-headers">
                  Виджеты
                </h3>
                <p className="mainScreen__consultation-advantages-vidgets-text advantages-text">
                  30 готовых <br /> решений
                </p>
              </div>

              <div className="mainScreen__consultation-advantages-dashboard">
                <h3 className="mainScreen__consultation-advantages-dashboard-headers advantages-headers">
                  Dashboard
                </h3>
                <p className="mainScreen__consultation-advantages-dashboard-text advantages-text">
                  с показателями <br /> вашего бизнеса
                </p>
              </div>

              <div className="mainScreen__consultation-advantages-skype">
                <h3 className="mainScreen__consultation-advantages-skype-headers advantages-headers">
                  Skype Аудит
                </h3>
                <p className="mainScreen__consultation-advantages-skype-text advantages-text">
                  отдела продажи <br /> и CRM системы
                </p>
              </div>

              <div className="mainScreen__consultation-advantages-35Days">
                <h3 className="mainScreen__consultation-advantages-35Days-headers advantages-headers">
                  35 дней
                </h3>
                <p className="mainScreen__consultation-advantages-35Days-text advantages-text">
                  использования <br /> CRM
                </p>
              </div>
            </div>

            <button className="mainScreen__consultation-button">
              Получить консультацию
            </button>

            <div className="mainScreen__consultation-advantages-mobile">
              <div className="mainScreen__consultation-advantages-mobile-skype">
                <img
                  src={line}
                  alt=""
                  className="mainScreen__consultation-advantages-mobile-skype-img"
                />
                <h3 className="mainScreen__consultation-advantages-mobile-skype-headers advantages-headers-mobile">
                  Skype Аудит
                </h3>
              </div>

              <div className="mainScreen__consultation-advantages-mobile-vidgets">
                <img
                  src={line}
                  alt=""
                  className="mainScreen__consultation-advantages-mobile-vidgets-img"
                />

                <h3 className="mainScreen__consultation-advantages-mobile-vidgets-headers advantages-headers-mobile">
                  30 Виджеты
                </h3>
              </div>

              <div className="mainScreen__consultation-advantages-mobile-dashboard">
                <img
                  src={line}
                  alt=""
                  className="mainScreen__consultation-advantages-mobile-dashboard-img"
                />

                <h3 className="mainScreen__consultation-advantages-mobile-dashboard-headers advantages-headers-mobile">
                  Dashboard
                </h3>
              </div>

              <div className="mainScreen__consultation-advantages-mobile-35Days">
                <img
                  src={line}
                  alt=""
                  className="mainScreen__consultation-advantages-mobile-35Days-img"
                />

                <h3 className="mainScreen__consultation-advantages-mobile-35Days-headers advantages-headers-mobile">
                  Месяц AMOCRM
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainScreen;
