import React, { useState } from "react";
import styles from "../profile-layout/ProfileLayout.module.scss";
import Image from "next/image";
import ProfileHistoreOrderdate from "./profile-histore-order-date/ProfileHistoreOrderdate";
import ProfileHistoreOrderItem from "./profile-histore-order-item/ProfileHistoreOrderItem";
import history from "../../../assets/history.png";
import orderArrow from "../../../assets/order-arrow.png";
import order from "../../../assets/order.png";
import { useQuery } from "@tanstack/react-query";
import { OrderService } from "@/src/services/order.service";
import { DeliveryTypes, Status } from "@/src/enums/enum";
const ProfileHistoreOrder = () => {
  const { data: orders, isLoading: isLoadingOrders } = useQuery({
    queryKey: ["get-orders-by-id"],
    queryFn: () => OrderService.getOrdersById(),
  });

  console.log("orders", orders?.items);
  const [currentIndex, setCurrentIndex] = useState<string | null>(null);
  console.log(currentIndex);
  return (
    <>
      <h3 className={styles.profile__content__right__text__title}>
        История заказов
      </h3>
      <div className={styles.profile__content__history}>
        {orders?.items.length == 0 ? (
          <div className={styles.profile__content__history__block}>
            <Image src={history} alt="history" />
            <div className={styles.profile__content__history__block__right}>
              <h3>У вас нет заказов</h3>
              <p>
                Переходите в интересующую вас категорию и сделайте свой первый
                заказ
              </p>
            </div>
          </div>
        ) : (
          orders?.items.map((order) => (
            <>
              <h3 className={styles.profile__content__history__title}>
                {Status.find((item) => item.key == order.status)?.name}
              </h3>
              <div className={styles.profile__content__history__process}>
                <div
                  className={styles.profile__content__history__process__header}
                >
                  <div
                    className={
                      styles.profile__content__history__process__header__left
                    }
                  >
                    <button
                      className={
                        styles.profile__content__history__process__header__arrow
                      }
                      onClick={() =>
                        setCurrentIndex((prev) =>
                          prev == order.id ? null : order.id
                        )
                      }
                    >
                      {currentIndex == order.id ? (
                        <Image
                          src={orderArrow}
                          alt="order-arrow"
                          width={20}
                          height={11}
                          style={{ rotate: "180deg" }}
                        />
                      ) : (
                        <Image
                          src={orderArrow}
                          alt="order-arrow"
                          width={20}
                          height={11}
                        />
                      )}
                    </button>
                    <div
                      className={
                        styles.profile__content__history__process__header__date
                      }
                    >
                      <span>20 мая 2020</span>
                      <p># 86352</p>
                    </div>
                    {order.OrderItem.slice(0, 4).map((item) => (
                      <div
                        className={
                          styles.profile__content__history__process__header__img
                        }
                      >
                        <Image
                          src={`${URL}/product/file/sushies/${item.Product.photoPath}`}
                          alt="order"
                          width={54}
                          height={54}
                        />
                      </div>
                    ))}
                  </div>
                  <div
                    className={
                      styles.profile__content__history__process__header__right
                    }
                  >
                    <div
                      className={
                        styles.profile__content__history__process__header__right__count
                      }
                    >
                      <span>Кол-во</span>
                      <p>7</p>
                    </div>
                    <div
                      className={
                        styles.profile__content__history__process__header__right__end
                      }
                    >
                      <span
                        className={
                          styles.profile__content__history__process__header__right__end__title
                        }
                      >
                        Итого
                      </span>
                      <p
                        className={
                          styles.profile__content__history__process__header__right__end__price
                        }
                      >
                        {order.totalSum} <span>тг</span>
                      </p>
                    </div>
                  </div>
                </div>
                <ProfileHistoreOrderdate
                  totalSum={order.totalSum}
                  typeDelivery={order.typeDelivery}
                  typePayment={order.typePayment}
                  entrance={order.Address.entrance}
                  accountId={order.Address.accountId}
                  createAt={order.Address.createAt}
                  flat={order.Address.flat}
                  floor={order.Address.floor}
                  id={order.Address.id}
                  street={order.Address.street}
                  streetNumber={order.Address.streetNumber}
                  dontRingTheDoorbell={order.dontRingTheDoorbell}
                  leaveItAtTheDoor={order.leaveItAtTheDoor}
                />
                {currentIndex == order.id && (
                  <div
                    className={styles.profile__content__history__process__order}
                  >
                    {order.OrderItem.map((item) => (
                      <ProfileHistoreOrderItem
                        createdAt={item.Product.createdAt}
                        description={item.Product.description}
                        id={item.Product.id}
                        name={item.Product.name}
                        photoPath={item.Product.photoPath}
                        price={item.Product.price}
                        type={item.Product.type}
                        updatedAt={item.Product.updatedAt}
                        volume={item.Product.volume}
                        weight={item.Product.weight}
                        quantity={item.quantity}
                      />
                    ))}
                  </div>
                )}
              </div>
            </>
          ))
        )}
      </div>
    </>
  );
};

export default ProfileHistoreOrder;
