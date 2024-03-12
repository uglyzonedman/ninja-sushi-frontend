import React, { useState } from "react";
import styles from "./ProfileModal.module.scss";
import Image from "next/image";
import close from "../../../assets/close.png";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AccountService } from "@/src/services/account.service";

interface IProfileModal {
  setIsShow: (isVisible: boolean) => void;
}
const ProfileModal = ({ setIsShow }: IProfileModal) => {
  const {
    data: profile,
    isLoading: isLoadingProfile,
    refetch,
  } = useQuery({
    queryKey: ["get-profile"],
    queryFn: () => AccountService.getProfile(),
  });
  const [login, setLogin] = useState(profile?.login);

  const { mutate: updateProfile } = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: () =>
      AccountService.updateProfile({
        login,
      }),
    onSuccess: () => {
      refetch();
      setIsShow(false);
    },
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        updateProfile();
      }}
      className={styles.profile}
    >
      <button
        onClick={() => setIsShow(false)}
        className={styles.profile__close}
      >
        <Image src={close} alt="close" />
      </button>
      <div className={styles.profile__content}>
        <h3 className={styles.profile__content__title}>Личные данные</h3>

        <div className={styles.profile__content__search}>
          <label className={styles.profile__content__label} htmlFor="">
            Логин
          </label>
          <div className={styles.profile__content__main}>
            <input
              onChange={(e) => setLogin(e.target.value)}
              defaultValue={profile?.login}
              type="text"
            />
          </div>
        </div>
        <button type="submit" className={styles.profile__content__button}>
          Сохранить изменения
        </button>
      </div>
    </form>
  );
};

export default ProfileModal;
