import { useAuth } from "@/src/hooks/hooks";
import React from "react";
import styles from "./Cart.module.scss";
import close from "../../../assets/close.png";
import Image from "next/image";
import classNames from "classnames";
import { useMutation, useQuery } from "@tanstack/react-query";
import { CartService } from "@/src/services/cart.service";
import shop from "../../../assets/shop.png";
import CartItem from "./cart-item/CartItem";
import Link from "next/link";

interface ICart {
  setIsShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}
const Cart = ({ setIsShowCart }: ICart) => {
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

  const { mutate: removeAll } = useMutation({
    mutationKey: ["delete-all"],
    mutationFn: () => CartService.removeAllCartItems(),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className={styles.cart}>
      <div className={styles.cart__container}>
        <div className={styles.cart__content}>
          <div className={styles.cart__content__title}>
            <h3>Ваш заказ</h3>
            <button onClick={() => setIsShowCart(false)}>
              <Image src={close} alt="close" />
            </button>
          </div>
          <div
            className={classNames(
              user && isLoadingCartItems
                ? []
                : cartItems?.items.length != 0
                ? [styles.cart__content__blocks]
                : [styles.cart__content__block]
            )}
          >
            {isLoadingCartItems ? (
              []
            ) : cartItems?.items?.length == 0 ? (
              <>
                <Image src={shop} alt="shop" />
                <h3 className={styles.cart__content__block__text}>
                  В вашей корзине пока пусто
                </h3>
              </>
            ) : (
              cartItems?.items?.map((cart) => (
                <CartItem key={cart.id} cart={cart} refetch={refetch} />
              ))
            )}
            {user ? "" : <button onClick={() => {}}>Авторизоваться</button>}
          </div>
        </div>
        <button onClick={() => removeAll()} className={styles.cart__deleteAll}>
          Очистить корзину
        </button>
        {user ? (
          <div className={styles.cart__footer}>
            <div className={styles.cart__footer__content}>
              <div className={styles.cart__footer__content__left}>
                <span className={styles.cart__footer__content__left__title}>
                  Итого:
                </span>
                <p className={styles.cart__footer__content__left__price}>
                  {totalSum}
                  <span>тг</span>
                </p>
              </div>
              <div className={styles.cart__footer__content__right}>
                <Link href={"/order/create-order"}>Оформить заказ</Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
