"use client";
import React, { useState } from "react";
import styles from "./ProfileLayout.module.scss";
import Link from "next/link";
import classNames from "classnames";
import Image from "next/image";
import histore from "../../../assets/histore.png";
import favorite from "../../../assets/favorite.png";
import gps from "../../../assets/gps.png";
import sun from "../../../assets/sun.png";
import user from "../../../assets/user.png";
import pencil from "../../../assets/pencil.png";
import ProfileAddress from "../profile-address/ProfileAddress";
import { usePathname } from "next/navigation";
import ProfileFavorite from "../profile-favorite/ProfileFavorite";
import ProfileHistoreOrder from "../profile-histore-order/ProfileHistoreOrder";
import { useQuery } from "@tanstack/react-query";
import { AccountService } from "@/src/services/account.service";
import ProfileModal from "@/src/components/ui/profile-modal/ProfileModal";
import Overlay from "@/src/components/ui/overlay/Overlay";
const ProfileLayout = () => {
  const pathName = usePathname();
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["get-profile"],
    queryFn: () => AccountService.getProfile(),
  });

  const [isShow, setIsShow] = useState(false);
  return (
    <div className={styles.profile}>
      {isShow ? <Overlay /> : ""}
      <div className={styles.profile__container}>
        <div className={styles.profile__content}>
          <div className={styles.profile__content__left}>
            <ul className={styles.profile__content__left__list}>
              <Link
                href="/profile/histore-order"
                className={classNames(
                  pathName.split("/")[2] == "histore-order"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    pathName.split("/")[2] == "histore-order"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={histore} alt={`История`} />
                </div>
                <p
                  className={classNames(
                    pathName.split("/")[2] == "histore-order"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  История заказов
                </p>
              </Link>
              <Link
                href="/profile/favorite"
                className={classNames(
                  pathName.split("/")[2] == "favorite"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    pathName.split("/")[2] == "favorite"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={favorite} alt={`Избранное`} />
                </div>
                <p
                  className={classNames(
                    pathName.split("/")[2] == "favorite"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  Избранные товары
                </p>
              </Link>
              <Link
                href="/profile/address"
                className={classNames(
                  pathName.split("/")[2] == "address"
                    ? [styles.profile__content__left__list__active]
                    : [styles.profile__content__left__list__button]
                )}
              >
                <div
                  className={classNames(
                    pathName.split("/")[2] == "address"
                      ? [styles.profile__content__left__list__active__img]
                      : [styles.profile__content__left__list__button__img]
                  )}
                >
                  <Image src={gps} alt={`GPS`} />
                </div>
                <p
                  className={classNames(
                    pathName.split("/")[2] == "address"
                      ? [styles.profile__content__left__list__active__text]
                      : [styles.profile__content__left__list__button__text]
                  )}
                >
                  Адрес доставки
                </p>
              </Link>
              <Link
                href="/profile/theme"
                className={styles.profile__content__left__list__button}
              >
                <div
                  className={styles.profile__content__left__list__button__img}
                >
                  <Image src={sun} alt={`Sun`} />
                </div>
                <p
                  className={styles.profile__content__left__list__button__text}
                >
                  Тема сайта
                </p>
              </Link>
            </ul>
            <div className={styles.profile__content__left__user}>
              <Image
                className={styles.profile__content__left__user__img}
                src={user}
                alt="User"
              />
              <div className={styles.profile__content__left__user__info}>
                <div
                  className={styles.profile__content__left__user__info__text}
                >
                  <h3
                    className={
                      styles.profile__content__left__user__info__text__name
                    }
                  >
                    {isLoadingProfile
                      ? ""
                      : profile?.account.login == null
                      ? "Логин не указан"
                      : profile.account.login}
                  </h3>
                  <button
                    onClick={() => setIsShow(!isShow)}
                    className={
                      styles.profile__content__left__user__info__text__button
                    }
                  >
                    <Image src={pencil} alt="penFcil" />
                  </button>
                </div>
                <p
                  className={
                    styles.profile__content__left__user__info__description
                  }
                >
                  {isLoadingProfile ? "" : profile?.account.email}
                </p>
                <p className={styles.profile__content__left__user__info__phone}>
                  {isLoadingProfile ? "" : profile?.account.phone}
                </p>
              </div>
            </div>
          </div>
          <div className={styles.profile__content__right}>
            {pathName.split("/")[2] == "address" && <ProfileAddress />}
            {pathName.split("/")[2] == "favorite" && <ProfileFavorite />}
            {pathName.split("/")[2] == "histore-order" && (
              <ProfileHistoreOrder />
            )}
          </div>
        </div>
      </div>
      {isShow ? <ProfileModal setIsShow={setIsShow} /> : ""}
    </div>
  );
};

export default ProfileLayout;
