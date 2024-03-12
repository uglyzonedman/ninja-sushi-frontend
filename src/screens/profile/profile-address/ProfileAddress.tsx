import React, { useState } from "react";
import styles from "../profile-layout/ProfileLayout.module.scss";
import AddressIco from "@/src/components/svgs/AddressSvg";
import Image from "next/image";
import plus from "../../../assets/plus.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddressService } from "@/src/services/address.service";
import { IAddress } from "@/src/interfaces/address.interface";
import basket from "../../../assets/basket.png";
import map from "../../../assets/map.png";
import AddressModal from "@/src/components/ui/address-modal/AddressModal";
import Overlay from "@/src/components/ui/overlay/Overlay";
const ProfileAddress = () => {
  const {
    data: address,
    isLoading: isLoadingAddress,
    refetch,
  } = useQuery({
    queryKey: ["get-address"],
    queryFn: () => AddressService.getByUser(),
  });

  const { mutate } = useMutation({
    mutationKey: ["delete-address"],
    mutationFn: (id: string) => AddressService.deleteAddress(id),
    onSuccess: () => {
      refetch();
    },
  });
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <>
      <div className={styles.profile__content__right__text}>
        <h3 className={styles.profile__content__right__text__title}>
          Адрес доставки
        </h3>
        <button
          onClick={() => setShowAddressModal((prev) => !prev)}
          className={styles.profile__content__right__text__button}
        >
          <p>Новый адрес</p>
          <Image src={plus} alt="plus" />
        </button>
      </div>
      {showAddressModal && (
        <AddressModal
          setShowAddressModal={setShowAddressModal}
          refetch={refetch}
        />
      )}
      {showAddressModal && <Overlay />}
      {isLoadingAddress ? (
        0
      ) : address?.items.length !== 0 ? (
        address?.items.map((item) => (
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
              onClick={() => {
                mutate(item.id);
              }}
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
      )}
    </>
  );
};

export default ProfileAddress;
