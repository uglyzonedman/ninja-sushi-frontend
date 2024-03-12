import Image from "next/image";
import { useState } from "react";
import apple from "../../../assets/apple.png";
import close from "../../../assets/closemodal.png";
import facebook from "../../../assets/facebooklogin.png";
import google from "../../../assets/google.png";
import styles from "./AuthModal.module.scss";
import { AuthState, authZustand } from "@/src/store/auth.zustand";
import Link from "next/link";
import { URL } from "@/src/api/api";
import Cookies from "js-cookie";
interface IAuthModal {
  isOpen: boolean;
  setIsOpen: any;
}

const AuthModal = ({ isOpen, setIsOpen }: IAuthModal) => {
  const {
    login: loginFunc,
    register: registerFunc,
    loginGoogle,
  } = authZustand((state: AuthState) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState("");
  const [type, setType] = useState("login");
  const onSubmit = () => {
    try {
      if (type == "login") {
        loginFunc(email, password);
      } else {
        registerFunc(email, password, login);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className={styles.auth}
    >
      <button onClick={() => setIsOpen()} className={styles.auth__close}>
        <Image src={close} alt="close" />
      </button>
      <div className={styles.auth__content}>
        {type == "login" ? (
          <h3 className={styles.auth__content__title}>Авторизация</h3>
        ) : (
          <h3 className={styles.auth__content__title}>Регистрация</h3>
        )}
        <p className={styles.auth__content__desc}>
          Введите вашу почту и пароль
        </p>
        <div className={styles.auth__content__block}>
          {type == "login" ? (
            <>
              <div className={styles.auth__content__block__item}>
                <label htmlFor="">Почта</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>

              <div className={styles.auth__content__block__item}>
                <label htmlFor="">Пароль</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
            </>
          ) : (
            <>
              <div className={styles.auth__content__block__item}>
                <label htmlFor="">Почта</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className={styles.auth__content__block__item}>
                <label htmlFor="">Логин</label>
                <input onChange={(e) => setLogin(e.target.value)} type="text" />
              </div>
              <div className={styles.auth__content__block__item}>
                <label htmlFor="">Пароль</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
            </>
          )}
          {type == "login" ? (
            <button
              type="submit"
              className={styles.auth__content__block__button}
            >
              Войти в систему
            </button>
          ) : (
            <button
              type="submit"
              className={styles.auth__content__block__button}
            >
              Создать аккаунт
            </button>
          )}

          <span className={styles.auth__content__block__span}>Или</span>
          <div className={styles.auth__content__block__buttons}>
            <Link
              href={`${URL}/account/auth/google/callback`}
              className={styles.auth__content__block__buttons__google}
              onClick={() => {
                setIsOpen();
                loginGoogle();
              }}
            >
              <Image src={google} alt="google" />
              <p>Google</p>
            </Link>
            <button
              type="button"
              className={styles.auth__content__block__buttons__facebook}
            >
              <Image src={facebook} alt="facebook" />
              <p>Facebook</p>
            </button>
            <button
              type="button"
              className={styles.auth__content__block__buttons__apple}
            >
              <Image src={apple} alt="apple" />
              <p>Войти через Apple id</p>
            </button>
          </div>
          {type == "login" ? (
            <button
              className={styles.auth__switch}
              type="button"
              onClick={() => setType("")}
            >
              Нет аккаунта?
            </button>
          ) : (
            <button
              className={styles.auth__switch}
              type="button"
              onClick={() => setType("login")}
            >
              Есть аккаунт?
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default AuthModal;
