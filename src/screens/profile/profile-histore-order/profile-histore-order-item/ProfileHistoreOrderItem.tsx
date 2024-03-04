import React from "react";
import styles from "../../profile-layout/ProfileLayout.module.scss";
import Image from "next/image";
import orderItem from "../../../../assets/orderitem.png";
const ProfileHistoreOrderItem = () => {
  return (
    <div className={styles.profile__content__history__process__order__item}>
      <div
        className={styles.profile__content__history__process__order__item__left}
      >
        <Image src={orderItem} height={64} width={64} alt="orderItem" />
        <div
          className={
            styles.profile__content__history__process__order__item__info
          }
        >
          <h3
            className={
              styles.profile__content__history__process__order__item__info__name
            }
          >
            Филадельфия с угрем
          </h3>
          <div
            className={
              styles.profile__content__history__process__order__item__info__weight
            }
          >
            <span>Вес: </span>
            <p>40 г</p>
          </div>
        </div>
      </div>
      <div
        className={
          styles.profile__content__history__process__order__item__right
        }
      >
        <div
          className={
            styles.profile__content__history__process__order__item__right__price
          }
        >
          <span
            className={
              styles.profile__content__history__process__order__item__right__price__title
            }
          >
            Цена
          </span>
          <p
            className={
              styles.profile__content__history__process__order__item__right__price__sum
            }
          >
            850 <span>грн</span>
          </p>
        </div>
        <div
          className={
            styles.profile__content__history__process__order__item__right__count
          }
        >
          <span
            className={
              styles.profile__content__history__process__order__item__right__count__title
            }
          >
            Кол-во
          </span>
          <p
            className={
              styles.profile__content__history__process__order__item__right__count__sum
            }
          >
            1
          </p>
        </div>
        <div
          className={
            styles.profile__content__history__process__order__item__right__result
          }
        >
          <span
            className={
              styles.profile__content__history__process__order__item__right__result__title
            }
          >
            Итого
          </span>
          <p
            className={
              styles.profile__content__history__process__order__item__right__result__sum
            }
          >
            850 <span>грн</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHistoreOrderItem;
