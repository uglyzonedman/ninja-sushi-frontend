import React from "react";
import styles from "../profile-layout/ProfileLayout.module.scss";
import AddressIco from "@/src/components/svgs/AddressSvg";
import Image from "next/image";
import plus from "../../../assets/plus.png";
const ProfileAddress = () => {
  return (
    <>
      {/* {showAddressModal ? <div className={styles.profile__overlay}></div> : ""} */}
      <div className={styles.profile__content__right__text}>
        <h3 className={styles.profile__content__right__text__title}>
          Адрес доставки
        </h3>
        <button
          //   onClick={() => setShowAdressModal(true)}
          className={styles.profile__content__right__text__button}
        >
          <p>Новый адрес</p>
          <Image src={plus} alt="plus" />
        </button>
      </div>
      {/* {showAddressModal ? (
        <AddressModal setShowAdressModal={setShowAdressModal} />
      ) : (
        ""
      )} */}
      {/* {isLoadingAddress ? (
        0
      ) : address?.length !== 0 ? (
        address?.map((item: IAddress) => (
          <div className={styles.profile__content__right__item}>
            <Image
              className={styles.profile__content__right__item__map}
              src={map}
              alt="map"
            />
            <div className={styles.profile__content__right__item__address}>
              <p>
                {item.street}, {item.streetNumber}
              </p>
              <span>
                Подьезд {item.entrance}, этаж {item.flat}, квартира {item.floor}
              </span>
            </div>
            <button
              onClick={() => {}}
              className={styles.profile__content__right__item__button}
            >
              <Image src={basket} alt="basket" />
            </button>
          </div>
        ))
      ) : (
        <div className={styles.profile__content__right__block}>
          <AddressIco />
          <div className={styles.profile__content__right__block__text}>
            <h3>У вас нет сохраненных адресов</h3>
            <p>
              Переходите в интересующую вас категорию и сделайте свой первый
              заказ и адрес сохранится автоматически
            </p>
          </div>
        </div>
      )} */}
    </>
  );
};

export default ProfileAddress;
