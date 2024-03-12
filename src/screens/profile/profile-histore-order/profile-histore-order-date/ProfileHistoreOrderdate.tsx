import React from "react";
import styles from "../../profile-layout/ProfileLayout.module.scss";
import { IAddres } from "@/src/interfaces/address.interface";
import { PaymentTypes } from "@/src/enums/enum";
interface IProfileHistoryAddres extends IAddres {
  typePayment: string;
  typeDelivery: string;
  totalSum: number;
  leaveItAtTheDoor: boolean;
  dontRingTheDoorbell: boolean;
}
const ProfileHistoreOrderdate = ({
  accountId,
  createAt,
  entrance,
  flat,
  floor,
  id,
  street,
  streetNumber,
  typePayment,
  typeDelivery,
  totalSum,
  leaveItAtTheDoor,
  dontRingTheDoorbell,
}: IProfileHistoryAddres) => {
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
          {street} {streetNumber}, под. {entrance}, кв. {flat}, э. {floor}
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
          {PaymentTypes.find((type) => type.key == typePayment)?.name}
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
          {totalSum} тг.
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
          {leaveItAtTheDoor && "Оставить у двери"}
        </p>
        <p
          className={
            styles.profile__content__history__process__data__note__right
          }
        >
          {dontRingTheDoorbell && "Не звонить в дверь"}
        </p>
      </div>
    </div>
  );
};

export default ProfileHistoreOrderdate;
