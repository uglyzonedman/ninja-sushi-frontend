import React from "react";
import styles from "./OrderSingleProduct.module.scss";
import { IProduct } from "@/src/interfaces/product.interface";
import Image from "next/image";
interface IProfileHistoryOrderItem extends IProduct {
  quantity: number;
}
const OrderSingleProduct = ({
  createdAt,
  description,
  id,
  name,
  photoPath,
  price,
  type,
  updatedAt,
  volume,
  weight,
  quantity,
}: IProfileHistoryOrderItem) => {
  return (
    <div className={styles.profile__content__history__process__order__item}>
      <div
        className={styles.profile__content__history__process__order__item__left}
      >
        <Image
          src={`${URL}/product/file/sushies/${photoPath}`}
          height={64}
          width={64}
          alt="orderItem"
        />
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
            {name}
          </h3>
          <div
            className={
              styles.profile__content__history__process__order__item__info__weight
            }
          >
            <span>Вес: </span>
            <p>{weight} г</p>
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
            {price} <span>тг.</span>
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
            {quantity}
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
            {price * quantity} <span>тг</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderSingleProduct;
