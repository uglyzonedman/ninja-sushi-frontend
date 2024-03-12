import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./AddressModal.module.scss";
import Image from "next/image";
import close from "../../../assets/close.png";
import search from "../../../assets/search.png";
import { IAddres, IAddresState } from "@/src/interfaces/address.interface";
import { useMutation } from "@tanstack/react-query";
import { AddressService } from "@/src/services/address.service";

interface IAddressModal {
  setShowAddressModal: React.Dispatch<React.SetStateAction<boolean>>;
  refetch: any;
}
const AddressModal = ({ setShowAddressModal, refetch }: IAddressModal) => {
  const [data, setData] = useState<IAddresState>({
    street: "",
    streetNumber: 0,
    entrance: 0,
    floor: 0,
    flat: 0,
  });

  const { mutate } = useMutation({
    mutationKey: ["create-address"],
    mutationFn: () =>
      AddressService.createAddress(
        data.street,
        data.streetNumber,
        data.flat,
        data.entrance,
        data.floor
      ),
    onSuccess: () => {
      refetch();
      setShowAddressModal(false);
    },
  });

  return ReactDOM.createPortal(
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate();
      }}
      className={styles.address}
    >
      <button
        className={styles.address__close}
        onClick={() => setShowAddressModal(false)}
      >
        <Image src={close} alt="close" />
      </button>
      <div className={styles.address__content}>
        <h3 className={styles.address__content__title}>
          Введите адрес или выберите на карте
        </h3>
        <div className={styles.address__content__search}>
          <div className={styles.address__content__main}>
            <Image src={search} alt="search" />
            <input
              onChange={(e) => setData({ ...data, street: e.target.value })}
              type="text"
            />
          </div>
        </div>
        <div className={styles.address__content__block}>
          <div className={styles.address__content__block__item}>
            <label htmlFor="">Номер дома</label>
            <input
              onChange={(e) =>
                setData({ ...data, streetNumber: +e.target.value })
              }
              type="number"
            />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor="">Подъезд</label>
            <input
              onChange={(e) => setData({ ...data, entrance: +e.target.value })}
              type="number"
            />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor="">Этаж</label>
            <input
              onChange={(e) => setData({ ...data, floor: +e.target.value })}
              type="number"
            />
          </div>
          <div className={styles.address__content__block__item}>
            <label htmlFor="">Квартира</label>
            <input
              onChange={(e) => setData({ ...data, flat: +e.target.value })}
              type="number"
            />
          </div>
        </div>
        <button type="submit" className={styles.address__content__button}>
          Сохранить адрес
        </button>
      </div>
    </form>,
    typeof window !== "undefined" ? document.body : window
  );
};

export default AddressModal;
