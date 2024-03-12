import React from "react";
import styles from "./Delivery.module.scss";
import MoneySvg from "@/src/components/svgs/MoneySvg";
import BankCardSvg from "@/src/components/svgs/BankCardSvg";
import BitcoinSvg from "@/src/components/svgs/BitcoinSvg";
import PipeSvg from "@/src/components/svgs/PipeSvg";
import MobileSvg from "@/src/components/svgs/MobileSvg";
import SiteSvg from "@/src/components/svgs/SiteSvg";
import ClockSvg from "@/src/components/svgs/ClockSvg";
const Delivery = () => {
  const color = [
    {
      id: 0,
      bg: "#7cb3423d",
      border: "#7cb342",
    },
    {
      id: 1,
      bg: "#fbc02d3d",
      border: "#FBC02D",
    },
    {
      id: 2,
      bg: "#ff52523d",
      border: "#FF5252",
    },
  ];
  return (
    <div className={styles.delivery}>
      <div className={styles.delivery__container}>
        <h3 className={styles.delivery__title}>Доставка</h3>
        <div className={styles.delivery__types}>
          {color.map((item) => (
            <div className={styles.delivery__types__item}>
              <div
                className={styles.delivery__types__item__circle}
                style={{
                  background: item.bg,
                  border: `1px solid ${item.border}`,
                }}
              ></div>
              <span>—</span>
              <p>Бесплатная доставка</p>
            </div>
          ))}
        </div>
      </div>
      <section className={styles.delivery__map}>
        <div className={styles.delivery__container}>
          <div className={styles.delivery__map__work}>
            <h3>Условия доставки</h3>
            <p>
              В настоящее время доставка осуществляется по зоне, выделенной
              цветом. Минимальная сумма заказа — 400 грн.
            </p>
            <div className={styles.delivery__map__work__time}>
              <span>Время работы:</span>
              <div className={styles.delivery__map__work__time__block}>
                <ClockSvg />
                <p>с 11:00 до 22:45</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.delivery__container}>
        <section className={styles.devilery__info}>
          <h3 className={styles.delivery__info__title}>Как сделать заказ?</h3>
          <p className={styles.delivery__info__description}>
            Выберите наиболее удобный для вас способ
          </p>
          <div className={styles.delivery__info__content}>
            <div className={styles.delivery__info__content__item}>
              <SiteSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                На сайте
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <MobileSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                В мобильном приложении
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <PipeSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                По телефону
              </p>
              <div className={styles.delivery__info__content__item__telephone}>
                <p
                  className={
                    styles.delivery__info__content__item__telephone__number
                  }
                >
                  +38 (099) 0077-313
                </p>
                <p
                  className={
                    styles.delivery__info__content__item__telephone__number
                  }
                >
                  +38 (096) 0077-313
                </p>
                <p
                  className={
                    styles.delivery__info__content__item__telephone__number
                  }
                >
                  +38 (073) 0777-313
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.devilery__info}>
          <h3 className={styles.delivery__info__title}>Оплата</h3>
          <p className={styles.delivery__info__description}>
            Убедитесь, что стоимость вашего заказа равна или превышает 400
            гривен
          </p>
          <div className={styles.delivery__info__content}>
            <div className={styles.delivery__info__content__item}>
              <MoneySvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Наличными курьеру
              </p>
              <p className={styles.delivery__info__content__item__description}>
                У наших ниндзя всегда есть сдача
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BankCardSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Оплата картой
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Оплачивайте онлайн на сайте
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BitcoinSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Криптовалютой
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Оплачивайте ваши заказы с помощью криптовалюты
              </p>
            </div>
          </div>
        </section>

        <section className={styles.devilery__info}>
          <h3 className={styles.delivery__info__title}>Как получить заказ?</h3>
          <p className={styles.delivery__info__description}>
            Среднее время доставки составляет 90 минут.
          </p>
          <div className={styles.delivery__info__content}>
            <div className={styles.delivery__info__content__item}>
              <MoneySvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Доставка курьером
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Наши курьеры не заставят ждать
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BankCardSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Самовывоз
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Имеем 33 ресторана по всей Украине
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BitcoinSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Криптовалютой
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Оплачивайте ваши заказы с помощью криптовалюты
              </p>
            </div>
          </div>
        </section>

        <section className={styles.devilery__info}>
          <h3 className={styles.delivery__info__title}>Дополнительные опции</h3>
          <p className={styles.delivery__info__description}>
            Предлагаем большой спектр услуг, чтобы вы получали еще больше
            удовольствия заказывая у нас еду.
          </p>
          <div className={styles.delivery__info__content}>
            <div className={styles.delivery__info__content__item}>
              <MoneySvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Предзаказ на указанное время
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Закажи зарание, чтобы не забыть
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BankCardSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Безлактозные блюда
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Для тех кто не переносит лактозу
              </p>
            </div>
            <div className={styles.delivery__info__content__item}>
              <BitcoinSvg />
              <p className={styles.delivery__info__content__item__tittle}>
                Вегетарианские роллы
              </p>
              <p className={styles.delivery__info__content__item__description}>
                Заботимся о предпочтениях каждого клиента
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Delivery;
