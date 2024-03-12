"use client";
import React, { useEffect, useState } from "react";
import styles from "./Order.module.scss";
import Image from "next/image";
import info from "../../assets/info.png";
import { DeliveryTypes, PaymentTypes } from "@/src/enums/enum";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AddressService } from "@/src/services/address.service";
import map from "../../assets/map.png";
import ready from "../../assets/ready.png";
import sushi from "../../assets/sushi.png";
import close from "../../assets/close.png";
import { CartService } from "@/src/services/cart.service";
import { useAuth } from "@/src/hooks/hooks";
import { AccountService } from "@/src/services/account.service";
import { OrderService } from "@/src/services/order.service";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const Order = () => {
  const [selectedOption, setSelectedOption] = useState(DeliveryTypes[0].key);
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [data, setData] = useState({ name: "", phoneNumber: "", comment: "" });
  const { push } = useRouter();
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["get-profile"],
    queryFn: () => AccountService.getProfile(),
  });

  const [selectedDoor, setSelectedDoor] = useState(true);
  const [selectedBreak, setSelectedBreak] = useState(true);
  const [selectedPayment, setSelectedPayment] = useState(PaymentTypes[0].key);
  const { data: address, isLoading: isLoadingAddress } = useQuery({
    queryKey: ["get-address"],
    queryFn: () => AddressService.getByUser(),
  });

  const { user } = useAuth();
  const {
    data: cartItems,
    isLoading: isLoadingCartItems,
    refetch,
  } = useQuery({
    queryKey: ["get-cart-items"],
    queryFn: () => CartService.getCartItems(),
    enabled: !!user,
  });

  const totalSum = isLoadingCartItems
    ? []
    : cartItems?.items.reduce((total, item) => {
        return total + Number(item?.Product.price) * Number(item?.quantity);
      }, 0);

  const { mutate: createOrder } = useMutation({
    mutationFn: () =>
      OrderService.createOrder(
        data.name,
        selectedAddress,
        data.phoneNumber,
        selectedDoor,
        selectedBreak,
        data.comment,
        selectedPayment,
        selectedOption
      ),
    onSuccess(data) {
      console.log("data", data.id);
      push(`/order/${data.id}`);
    },
  });
  const { mutate: deleteById } = useMutation({
    mutationKey: ["delete-by-id"],
    mutationFn: (id: string) => CartService.removeCartItem(id),
    onSuccess() {
      refetch();
      toast.error(`Вы удалили товар из корзины`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  const { mutate: incrementValue } = useMutation({
    mutationFn: (id: string) => CartService.incrementCartItem(id),
    onSuccess() {
      refetch();
      toast.success(`Вы добавили одну единицу товара в корзину`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });
  const { mutate: decrementValue } = useMutation({
    mutationFn: (id: string) => CartService.decrementCartItem(id),
    onSuccess() {
      refetch();
      toast.error(`Вы убрали одну единицу товара из корзины`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    },
  });

  console.log(
    "Все данные",
    "Имя",
    data.name,
    "Phone",
    data.phoneNumber,
    "Address",
    selectedAddress,
    "door",
    selectedDoor,
    "selectedBreak",
    selectedBreak,
    "comment",
    data.comment,
    "selectedPayment",
    selectedPayment,
    "delivery",
    selectedOption
  );
  return (
    <div className={styles.ordering}>
      <div className={styles.ordering__container}>
        <h3 className={styles.ordering__content__left__title}>
          Оформление заказа
        </h3>
        <div className={styles.ordering__content}>
          <div className={styles.ordering__content__left}>
            <div className={styles.ordering__content__left__personal}>
              <h3 className={styles.ordering__content__left__personal__title}>
                Личные данные
              </h3>
              <div
                className={styles.ordering__content__left__personal__content}
              >
                <div
                  className={
                    styles.ordering__content__left__personal__content__input
                  }
                >
                  <label>Имя</label>
                  <input
                    type="text"
                    placeholder="Введите имя"
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div
                  className={
                    styles.ordering__content__left__personal__content__input
                  }
                >
                  <label>Телефон</label>
                  <input
                    placeholder="Введите номер"
                    onChange={(e) =>
                      setData({ ...data, phoneNumber: e.target.value })
                    }
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className={styles.ordering__content__left__delivery}>
              <div className={styles.ordering__content__left__delivery__header}>
                <div
                  className={
                    styles.ordering__content__left__delivery__header__info
                  }
                >
                  <h3>Доставка</h3>
                </div>
                <div
                  className={
                    styles.ordering__content__left__delivery__header__zone
                  }
                >
                  <p>Зона доставки</p>
                  <button>
                    <Image src={info} alt="info" />
                  </button>
                </div>
              </div>
              <p
                className={
                  styles.ordering__content__left__delivery__header__desc
                }
              >
                Зона бесплатной доставки уточняется у оператора
              </p>
              <div className={styles.ordering__content__left__delivery__types}>
                {DeliveryTypes.map((type) => (
                  <div
                    className={
                      styles.ordering__content__left__delivery__types__item
                    }
                  >
                    <input
                      onChange={(e) => setSelectedOption(e.target.value)}
                      id={type.key}
                      type="radio"
                      name="radio"
                      value={type.key}
                      checked={selectedOption == type.key}
                    />
                    <label key={type.key} htmlFor={type.key}>
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>
              <p className={styles.ordering__content__left__minimal}>
                Минимальная сумма заказа 1500 тг
              </p>
              <div
                className={styles.ordering__content__left__delivery__address}
              >
                <div
                  className={
                    styles.ordering__content__left__delivery__address__items
                  }
                >
                  {isLoadingAddress
                    ? []
                    : address?.items.map((addres) => (
                        <div
                          className={
                            styles.ordering__content__left__delivery__address__items__item
                          }
                          style={{
                            border:
                              selectedAddress == addres.id
                                ? "1px solid #ff6633"
                                : "1px solid #ededed",
                          }}
                          onClick={() => setSelectedAddress(addres.id)}
                        >
                          <div
                            className={
                              styles.ordering__content__left__delivery__address__items__item__left
                            }
                          >
                            <Image src={map} alt="map" />
                            <div
                              className={
                                styles.ordering__content__left__delivery__address__items__item__left__desc
                              }
                            >
                              <p
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__left__desc__city
                                }
                              >
                                {addres.street}, {addres.streetNumber}
                              </p>
                              <p
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__left__desc__floor
                                }
                              >
                                Подьезд {addres.entrance}, этаж {addres.flat},
                                квартира {addres.floor}
                              </p>
                            </div>
                          </div>
                          <div
                            className={
                              styles.ordering__content__left__delivery__address__items__item__right
                            }
                          >
                            {selectedAddress == addres.id ? (
                              <button
                                onClick={() => setSelectedAddress(addres.id)}
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__right__dotactive
                                }
                              >
                                <div
                                  className={
                                    styles.ordering__content__left__delivery__address__items__item__right__dotactive__block
                                  }
                                ></div>
                              </button>
                            ) : (
                              <button
                                className={
                                  styles.ordering__content__left__delivery__address__items__item__right__dot
                                }
                              >
                                <div
                                  className={
                                    styles.ordering__content__left__delivery__address__items__item__right__dot__block
                                  }
                                ></div>
                              </button>
                            )}
                          </div>
                        </div>
                      ))}
                </div>
                <div
                  className={
                    styles.ordering__content__left__delivery__address__buttons
                  }
                >
                  <button
                    className={
                      styles.ordering__content__left__delivery__address__buttons__add
                    }
                  >
                    Добавить новый адрес
                  </button>
                  <button
                    className={
                      styles.ordering__content__left__delivery__address__buttons__delete
                    }
                  >
                    Удалить адрес
                  </button>
                </div>
                <div className={styles.ordering__content__left__delivery__door}>
                  <input
                    onChange={() => setSelectedDoor((prev) => !prev)}
                    type="checkbox"
                    id="door"
                    checked={selectedDoor}
                  />
                  <label htmlFor="door">Не звонить в дверь</label>
                </div>
                <div className={styles.ordering__content__left__delivery__door}>
                  <input
                    onChange={() => setSelectedBreak((prev) => !prev)}
                    type="checkbox"
                    id="break"
                    checked={selectedBreak}
                  />
                  <label htmlFor="break">Оставить под дверью</label>
                </div>
              </div>
            </div>

            <div className={styles.ordering__content__left__payment}>
              <div className={styles.ordering__content__left__payment__header}>
                <div
                  className={
                    styles.ordering__content__left__payment__header__info
                  }
                >
                  <h3
                    className={
                      styles.ordering__content__left__payment__header__info__title
                    }
                  >
                    Способ оплаты
                  </h3>
                  <p>Алкогольные напитки оплачиваются только наличными</p>
                </div>
              </div>
              <div className={styles.ordering__content__left__payment__types}>
                {PaymentTypes.map((type) => (
                  <button
                    onClick={() => setSelectedPayment(type.key)}
                    className={
                      styles.ordering__content__left__payment__types__item
                    }
                  >
                    {selectedPayment == type.key ? (
                      <div
                        className={
                          styles.ordering__content__left__payment__types__item__dotactive
                        }
                      ></div>
                    ) : (
                      <div
                        className={
                          styles.ordering__content__left__payment__types__item__dot
                        }
                      ></div>
                    )}
                    <p
                      className={
                        styles.ordering__content__left__payment__types__item__name
                      }
                    >
                      {type.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.ordering__content__left__comment}>
              <div className={styles.ordering__content__left__comment__header}>
                <div
                  className={
                    styles.ordering__content__left__comment__header__info
                  }
                >
                  <h3
                    className={
                      styles.ordering__content__left__comment__header__info__title
                    }
                  >
                    Комментарий
                  </h3>
                </div>
              </div>
              <div className={styles.ordering__content__left__comment__comment}>
                <label>Примечание к заказу</label>
                <textarea
                  onChange={(e) =>
                    setData({ ...data, comment: e.target.value })
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className={styles.ordering__content__right}>
            <div className={styles.ordering__content__right__items}>
              {isLoadingCartItems
                ? []
                : cartItems?.items.map((item) => (
                    <div
                      className={
                        styles.ordering__content__right__items__cart__item
                      }
                    >
                      <button
                        onClick={() => deleteById(item.id)}
                        className={
                          styles.ordering__content__right__items__cart__item__close
                        }
                      >
                        <Image src={close} alt="close" />
                      </button>
                      <div
                        className={
                          styles.ordering__content__right__items__cart__item__left
                        }
                      >
                        <div>
                          <Image
                            src={`http://localhost:8080/api-v2/product/file/sushies/${item.Product.photoPath}`}
                            alt={item.Product.photoPath}
                            width={87}
                            height={87}
                          />
                        </div>
                        <div
                          className={
                            styles.ordering__content__right__items__cart__item__left__desc
                          }
                        >
                          <h3
                            className={
                              styles.ordering__content__right__items__cart__item__left__desc__title
                            }
                          >
                            {item.Product.name}
                          </h3>
                          <p
                            className={
                              styles.ordering__content__right__items__cart__item__left__desc__weight
                            }
                          >
                            Вес: {item.Product.weight}
                          </p>
                        </div>
                      </div>
                      <div
                        className={
                          styles.ordering__content__right__items__cart__item__right
                        }
                      >
                        <p
                          className={
                            styles.ordering__content__right__items__cart__item__right__price
                          }
                        >
                          {item.Product.price}
                          тг
                        </p>
                        <div
                          className={
                            styles.ordering__content__right__items__cart__item__right__controllers
                          }
                        >
                          <button
                            onClick={() => decrementValue(item.id)}
                            className={
                              styles.ordering__content__right__items__cart__item__right__controllers__btn
                            }
                          >
                            -
                          </button>
                          <p
                            className={
                              styles.ordering__content__right__items__cart__item__right__controllers__count
                            }
                          >
                            {item.quantity}
                          </p>
                          <button
                            className={
                              styles.ordering__content__right__items__cart__item__right__controllers__btn
                            }
                            onClick={() => incrementValue(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
            <div className={styles.ordering__content__right__promo}>
              <input type="text" placeholder="Введите промокод" />
              <button>Применить</button>
            </div>
            <div className={styles.ordering__content__right__offer}>
              <div className={styles.ordering__content__right__offer__left}>
                <h3>Итого:</h3>
                <p>{totalSum} тг</p>
              </div>
              <div className={styles.ordering__content__right__offer__right}>
                <button onClick={() => createOrder()}>Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
