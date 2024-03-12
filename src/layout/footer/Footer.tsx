import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../assets/logo.png";
import gp from "../../assets/gp.png";
import app from "../../assets/appstore.png";
import Link from "next/link";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import card from "../../assets/card1.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__content__logo}>
            <Image width={246} height={59} src={logo} alt="logo" />
            <div className={styles.footer__content__logo__buttons}>
              <a href="">
                <Image src={app} alt="app" />
              </a>
              <a href="">
                <Image src={gp} alt="app" />
              </a>
            </div>
            <p className={styles.footer__content__logo__copyright}>
              © Ninja Sushi. All rights reserved.
            </p>
          </div>
          <ul className={styles.footer__content__nav}>
            <p className={styles.footer__content__nav__title}>Навигация:</p>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">Главная</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">Меню</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">Доставка</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">Вакансии</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">Новости</Link>
            </li>
          </ul>
          <ul className={styles.footer__content__nav}>
            <p className={styles.footer__content__nav__title}>
              Оформить заказ:
            </p>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">+7 778 425 99 76</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">+7 778 425 99 76</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">+7 778 425 99 76</Link>
            </li>
          </ul>
          <ul className={styles.footer__content__nav}>
            <p className={styles.footer__content__nav__title}>Время работы:</p>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">с 11:00 до 22:45</Link>
            </li>
            <li className={styles.footer__content__nav__item}>
              <Link href="/">с 22.45 до 06.00</Link>
            </li>
            <li className={styles.footer__content__nav__delivery}>
              <p>Ночная доставка</p>
            </li>
          </ul>
          <ul className={styles.footer__content__social}>
            <p className={styles.footer__content__nav__title}>
              Мы в соц. сетях:
            </p>
            <div className={styles.footer__content__social__links}>
              <a href="">
                <Image src={facebook} alt="facebook" />
              </a>
              <a href="">
                <Image src={instagram} alt="instagram" />
              </a>
            </div>
            <a className={styles.footer__content__social__telegram} href="/">
              <Image src={telegram} alt="telegram" />
              <span>Техподдержка</span>
            </a>
          </ul>
          <ul className={styles.footer__content__redirect}>
            <h3 className={styles.footer__content__redirect__title}>
              #NinjaSushi
            </h3>
            <p className={styles.footer__content__redirect__desc}>
              Ninja Sushi в фотографиях наших клиентов
            </p>
            <a className={styles.footer__content__redirect__instagram} href="/">
              Перейти в instagram
            </a>
          </ul>
        </div>
        <div className={styles.footer__content__footer}>
          <Link href="/test">Политика конфиденциальности</Link>
          <div className={styles.footer__content__footer__cards}>
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                className={styles.footer__content__footer__cards__card}
                key={i}
              >
                <Image src={card} alt={`card${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
