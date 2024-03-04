import React from "react";
import styles from "../../profile-layout/ProfileLayout.module.scss";
const ProfileHistoreOrderdate = () => {
  return (
    <div className={styles.profile__content__history__process__data}>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Адрес:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          проспект Науки, 13 До двери, кв 10 этаж 5
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Время:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          12 июля 12:00
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Способ оплаты:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          Наличными курьеру
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Сумма к оплате:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          338 грн
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Сдача с
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          500 грн
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__item}>
        <p
          className={
            styles.profile__content__history__process__data__item__left
          }
        >
          Кол-во человек:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__item__right
          }
        >
          4
        </p>
      </div>
      <div className={styles.profile__content__history__process__data__note}>
        <p
          className={
            styles.profile__content__history__process__data__note__left
          }
        >
          Примечание:
        </p>
        <p
          className={
            styles.profile__content__history__process__data__note__right
          }
        >
          Не звонить в дверь
        </p>
      </div>
    </div>
  );
};

export default ProfileHistoreOrderdate;
