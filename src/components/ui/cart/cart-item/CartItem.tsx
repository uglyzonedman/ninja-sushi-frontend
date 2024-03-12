import React from "react";
import styles from "./CartItem.module.scss";
import Image from "next/image";
import close from "../../../../assets/close.png";
import { useMutation } from "@tanstack/react-query";
import { CartService } from "@/src/services/cart.service";
import { IProduct } from "@/src/interfaces/product.interface";
import { ICartItems } from "@/src/interfaces/cart.interface";

interface ICartItem {
  cart: ICartItems;
  refetch: () => void;
}
const CartItem = ({ cart, refetch }: ICartItem) => {
  const { mutate: deleteById } = useMutation({
    mutationKey: ["delete-by-id"],
    mutationFn: (id: string) => CartService.removeCartItem(id),
    onSuccess() {
      refetch();
    },
  });

  const { mutate: incrementValue } = useMutation({
    mutationFn: (id: string) => CartService.incrementCartItem(id),
    onSuccess() {
      refetch();
    },
  });
  const { mutate: decrementValue } = useMutation({
    mutationFn: (id: string) => CartService.decrementCartItem(id),
    onSuccess() {
      refetch();
    },
  });
  return (
    <div className={styles.cart__item}>
      <button
        onClick={() => deleteById(cart.id)}
        className={styles.cart__item__close}
      >
        <Image src={close} alt="close" />
      </button>
      <div className={styles.cart__item__left}>
        <Image
          src={`http://localhost:8080/api-v2/product/file/sushies/${cart.Product.photoPath}`}
          alt={cart.Product.photoPath}
          width={58}
          height={47}
          sizes={"100vh"}
        />
        <div className={styles.cart__item__left__desc}>
          <h3 className={styles.cart__item__left__desc__title}>
            {cart.Product.name}
          </h3>
          <p className={styles.cart__item__left__desc__weight}>
            Вес: {cart.Product.weight}
          </p>
        </div>
      </div>
      <div className={styles.cart__item__right}>
        <p className={styles.cart__item__right__price}>
          {cart.Product.price} тг
        </p>
        <div className={styles.cart__item__right__controllers}>
          <button
            onClick={() => decrementValue(cart.id)}
            className={styles.cart__item__right__controllers__btn}
          >
            -
          </button>
          <p className={styles.cart__item__right__controllers__count}>
            {cart.quantity}
          </p>
          <button
            onClick={() => incrementValue(cart.id)}
            className={styles.cart__item__right__controllers__btn}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
