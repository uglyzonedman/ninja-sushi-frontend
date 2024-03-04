import React from "react";
import styles from "./Navigation.module.scss";
import Link from "next/link";
import RollsIco from "@/src/components/svgs/RollsSvg";
import SushiIco from "@/src/components/svgs/SushiSvg";
import SettsIco from "@/src/components/svgs/SettsSvg";
import BoulsIco from "@/src/components/svgs/BoulsSvg";
import DrinksIco from "@/src/components/svgs/DrinksSvg";
import SousIco from "@/src/components/svgs/SousSvg";
import UnkownIco from "@/src/components/svgs/UnkownSvg";
const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__content}>
        <li className={styles.navigation__content__item}>
          <Link href="/products/roll">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <RollsIco />
              </div>
              <p>Роллы</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/sushi">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SushiIco />
              </div>

              <p>Суши</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/set">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SettsIco />
              </div>
              <p>Сеты</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/snack">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <BoulsIco />
              </div>
              <p>Закуски</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/drink">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <DrinksIco />
              </div>
              <p>Напитки</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/404">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <SousIco />
              </div>
              <p>Соусы</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/404">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <UnkownIco />
              </div>
              <p>Неизв...</p>
            </div>
          </Link>
        </li>
        <li className={styles.navigation__content__item}>
          <Link href="/products/404">
            <div className={styles.navigation__content__item__link}>
              <div className={styles.navigation__content__item__link__img}>
                <UnkownIco />
              </div>
              <p>Неизв...</p>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
