"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Image from "next/image";
import ArrowIco from "@/src/components/svgs/ArrowSvg";
import PhoneIco from "@/src/components/svgs/PhoneSvg";
import NoticeIco from "@/src/components/svgs/NoticeSvg";
import FavouriteIco from "@/src/components/svgs/FavouriteSvg";
import UserIco from "@/src/components/svgs/UserSvg";
import BasketIco from "@/src/components/svgs/BasketSvg";
import logo from "../../assets/logo.png";
import country from "../../assets/country.png";
import { AuthState, authZustand } from "@/src/store/auth.zustand";
import { useAuth } from "@/src/hooks/hooks";
import useravatar from "../../assets/user.png";
import { useQuery } from "@tanstack/react-query";
import { AccountService } from "@/src/services/account.service";
const Header = () => {
  const { isOpen, setIsOpen } = authZustand((state: AuthState) => state);

  const { user } = useAuth();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data: profile, isLoading } = useQuery({
    queryKey: ["get-profile"],
    queryFn: () => AccountService.getProfile(),
  });

  console.log("user", JSON.parse(user));
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__content}>
          <div className={styles.header__content__logo}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
            <button className={styles.header__content__logo__button}>
              <ArrowIco />
            </button>
          </div>
          <div className={styles.header__content__menu}>
            {/* <Image width={20} height={16} src={country} alt="country" /> */}
            <button className={styles.header__content__menu__country}>
              АСТАНА
            </button>
            <span>|</span>
            <p className={styles.header__content__menu__value}>RU</p>
          </div>
          <nav className={styles.header__content__navigation}>
            <ul className={styles.header__content__navigation__list}>
              <li className={styles.header__content__navigation__list__item}>
                <Link href="/">Главная</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href="/delivery">Доставка</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href="/">О нас</Link>
              </li>
              <li className={styles.header__content__navigation__list__item}>
                <Link href="/news">Новости</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header__content__phone}>
            <PhoneIco />
            <p className={styles.header__content__phone__number}>
              +7 778 425 99 76
            </p>
          </div>
          <div className={styles.header__content__buttons}>
            <ul className={styles.header__content__buttons__list}>
              <button className={styles.header__content__buttons__list__notice}>
                <NoticeIco />
              </button>
              <Link
                href={"/profile/favorite"}
                className={styles.header__content__buttons__list__favourite}
              >
                <FavouriteIco />
              </Link>

              {isClient && JSON.parse(user) ? (
                <Link
                  href={"/profile/address"}
                  className={styles.header__content__buttons__list__profile}
                >
                  <Image src={useravatar} alt="user" width={36} height={36} />
                </Link>
              ) : (
                <button
                  onClick={() => setIsOpen()}
                  className={styles.header__content__buttons__list__user}
                >
                  <UserIco />
                </button>
              )}

              <button className={styles.header__content__buttons__list__basket}>
                <p>Корзина</p>
                <BasketIco />
              </button>
            </ul>
          </div>
          <div className={styles.header__burger}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
